import React from "react";
import firebase from "firebase";
import { Formik } from "formik";
import MainButtonsContainer from "../Components/MainButtonsContainer";
import * as Yup from "yup";
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TextInputComp from "../Components/TextInputComp";

export default function SignUp({ navigation, isActive, setIsActive }) {
  const onSignUphandler = (values) => {
    const auth = firebase.auth();
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
      })
      .then(async (userCredential) => {
        const user = userCredential?.user.providerData[0];
        const update = {
          displayName: values.username,
        };
        await firebase.auth().currentUser.updateProfile(update);
        if (user) {
          navigation.navigate("mainHome", {
            screen: "Home",
            params: { user: user.displayName },
          });
        }
      });
  };

  const validate = Yup.object({
    username: Yup.string()
      .max(15, "Too Long name man!!")
      .min(2, "give me good name man!!")
      .required("require Pro!!"),
    email: Yup.string()
      .email("email Is in vaild Pro")
      .required("require Email man!!")
      .max(40, "to Long Email man!!")
      .min(6, "to short Email Man"),
    password: Yup.string()
      .required("require password man!!")
      .max(25, "enough Bro not party!!")
      .min(6, "be a man and put strong pw"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match bro!!"
    ),
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
          <Text style={styles.title}>Welcome </Text>
          <Text style={styles.titleBold}>Home,</Text>
        </View>
        <Text style={styles.subtitle}>
          Enter your information below, Name, Email adress and Password.
        </Text>
      </View>

      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, { resetForm }) => {
          onSignUphandler(values);
          resetForm({ values: "" });
        }}
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
              type="username"
              textInputLabel="user name:"
              placeHolder="your Name:"
              textInputValue="username"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.username}
            />
            {touched.username && errors.username ? (
              <View style={styles.errContainer}>
                <Text style={styles.err}>{errors.username}</Text>
              </View>
            ) : null}
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
            {touched.username && errors.email ? (
              <View style={styles.errContainer}>
                <Text style={styles.err}>{errors.email}</Text>
              </View>
            ) : null}

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
            {touched.username && errors.password ? (
              <View style={styles.errContainer}>
                <Text style={styles.err}>{errors.password}</Text>
              </View>
            ) : null}
            <TextInputComp
              secure={true}
              type="password"
              textInputLabel="Confirm Password:"
              placeHolder="Confirm Password:"
              textInputValue="confirmPassword"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values.confirmPassword}
            />
            {touched.username && errors.confirmPassword ? (
              <View style={styles.errContainer}>
                <Text style={styles.err}>{errors.confirmPassword}</Text>
              </View>
            ) : null}
            <TouchableOpacity onPress={handleSubmit} activeOpacity={0.5}>
              <View style={styles.signUpButtonContainer}>
                <Text style={styles.signUpButton}>SignUp</Text>
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
  // image styles
  image: { width: 300, height: 150, resizeMode: "cover", marginTop: 20 },
  //login button styles
  signUpButtonContainer: {
    width: 280,
    height: 45,
    borderRadius: 50,
    marginTop: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    color: "white",
    fontWeight: "bold",
  },
  // big text styles
  headerTitleContainer: { width: "90%", marginBottom: 20, marginTop: 30 },
  titleWrapper: { flexDirection: "row" },
  title: { color: "black", fontSize: 45 },
  titleBold: { color: "black", fontSize: 45, fontWeight: "bold" },
  // subtitle styles
  subtitle: {
    color: "#777",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 25,
    width: "85%",
    marginBottom: 10,
  },
  // errors styles
  errContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90%",
    marginLeft: 10,
  },
  err: { color: "red", fontSize: 12, marginTop: 10 },
});
