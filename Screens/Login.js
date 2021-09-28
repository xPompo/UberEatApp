import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import firebase from "firebase";
import TextInputComp from "../Components/TextInputComp";

import MainButtonsContainer from "../Components/MainButtonsContainer";

export default function Login({ navigation, isActive, setIsActive }) {
  const { width } = Dimensions.get("window");
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

  return (
    <View style={styles.container}>
      <MainButtonsContainer
        navigation={navigation}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <View style={styles.headerTitleContainer}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Hello </Text>
          <Text style={styles.titleBold}>Beautiful,</Text>
        </View>
        <Text style={styles.subtitle}>
          Enter your information below ,Email adress and Password.
        </Text>
      </View>
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
              placeHolder="Email Adress:"
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
              placeHolder="Password:"
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
              <View style={styles.loginButtonContainer}>
                <Text style={styles.loginButton}>LogIn</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  errContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90%",
    marginLeft: 50,
  },
  err: { color: "red", fontSize: 12, marginTop: 10 },
  headerTitleContainer: { width: "90%", marginVertical: 80 },
  titleWrapper: { flexDirection: "row" },
  title: { color: "black", fontSize: 45 },
  titleBold: { color: "black", fontSize: 45, fontWeight: "bold" },
  subtitle: {
    color: "#777",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 25,
    width: "85%",
    marginBottom: 10,
  },
  loginButtonContainer: {
    width: 280,
    height: 45,
    borderRadius: 50,
    marginTop: 25,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    color: "white",
    fontWeight: "bold",
  },
});
