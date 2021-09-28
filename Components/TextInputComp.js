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
      <Text
        style={{
          marginBottom: 5,
          paddingLeft: 10,
        }}
      >
        {textInputLabel}
      </Text>
      <TextInput
        style={{
          backgroundColor: "rgba(22,22,22,.3)",
          marginBottom: 15,
          width: "100%",
          paddingLeft: 10,
          borderRadius: 50,
          height: 35,
        }}
        placeholderTextColor="white"
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
