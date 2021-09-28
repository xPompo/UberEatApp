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
          borderBottomColor: "#888",
          borderBottomWidth: 1,
          marginBottom: 5,
          width: "100%",
          paddingLeft: 10,
          borderRadius: 50,
          height: 35,
        }}
        placeholderTextColor="#888"
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
