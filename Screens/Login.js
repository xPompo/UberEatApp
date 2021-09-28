import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase from "firebase";
import TextInputComp from "../Components/TextInputComp";

import MainButtonsContainer from "../Components/MainButtonsContainer";

export default function Login({ navigation, isActive, setIsActive }) {
  const onLoginHandler = (values) => {
    const auth = firebase.auth();
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    if (error) {
      return;
    } else {
      navigation.navigate("mainHome", { screen: "Home" });
    }
  };

  const validate = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .max(12, "no More Please hh")
      .min(6, "Too Weak Man")
      .required("Required"),
  });

  //   const navigationHandler = () => {
  //     navigation.navigate("SignUp");
  //   };

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <MainButtonsContainer
        navigation={navigation}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => onLoginHandler(values)}
        validationSchema={validate}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInputComp
              secure={false}
              type="emailAddress"
              textInputLabel="Email Adress:"
              placeHolder="email adress:"
              textInputValue="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.email}
            />
            {touched.email && errors.email ? (
              <View style={styles.errContainer}>
                <Text style={styles.err}>{errors.email}</Text>
              </View>
            ) : (
              <></>
            )}

            <TextInputComp
              secure={true}
              type="password"
              textInputLabel="Password:"
              placeHolder="password:"
              textInputValue="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.password}
            />
            {touched.password && errors.password ? (
              <View style={styles.errContainer}>
                <Text style={styles.err}>{errors.password}</Text>
              </View>
            ) : (
              <></>
            )}

            <TouchableOpacity onPress={handleSubmit} activeOpacity={0.5}>
              <View
                style={{
                  width: 160,
                  height: 35,
                  borderRadius: 50,
                  backgroundColor: "black",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  LogIn
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  errContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90%",
    marginLeft: 20,
  },
  err: { color: "red", fontSize: 12, marginBottom: 10 },
});
