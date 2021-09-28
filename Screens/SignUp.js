import React from "react";
import firebase from "firebase";
import { Formik } from "formik";
import { View, StatusBar, Text, TouchableOpacity } from "react-native";
import TextInputComp from "../Components/TextInputComp";

export default function SignUp({ navigation }) {
  const auth = firebase.auth();
  const SignUpWithFirebase = (values) => {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => navigation.navigate("mainHome", { screen: "Home" }))
      .catch((error) => {
        // Handle Errors here.
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  };

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => SignUpWithFirebase(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInputComp
              secure={false}
              type="username"
              textInputLabel="user name:"
              placeHolder="your name:"
              textInputValue="username"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.username}
            />
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
            <TextInputComp
              secure={true}
              type="password"
              textInputLabel="Confirm Password:"
              placeHolder="confirm password:"
              textInputValue="confirmPassword"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.confirmPassword}
            />
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
                  SignUp
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}
