import React from "react";
import { View, Text, TextInput } from "react-native";

export default function TextInputComp(props) {
  const {
    textInputLabel,
    placeHolder,
    textInputValue,
    handleBlur,
    handleChange,
    values,
    type,
    secure,
  } = props;
  return (
    <View
      style={{
        width: "90%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      {/* <Text
        style={{
          marginBottom: 5,
          paddingLeft: 10,
        }}
      >
        {textInputLabel}
      </Text> */}
      <TextInput
        style={{
          borderBottomColor: "#555",
          borderBottomWidth: 1,
          marginTop: 25,
          width: "100%",
          paddingLeft: 20,
          paddingVertical: 10,
          borderRadius: 50,
        }}
        placeholderTextColor="#aaa"
        textContentType={type}
        secureTextEntry={secure}
        placeholder={`${placeHolder}`}
        onChangeText={handleChange(`${textInputValue}`)}
        onBlur={handleBlur(`${textInputValue}`)}
        value={values}
      />
    </View>
  );
}
