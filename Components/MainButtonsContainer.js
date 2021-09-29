import React, { useState } from "react";
import { View } from "react-native";
import Button from "./Button";

export default function MainButtonsContainer({
  navigation,
  isActive,
  setIsActive,
}) {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Button
        text="Login"
        isActive={isActive}
        setIsActive={setIsActive}
        navigation={navigation}
      />
      <Button
        text="SignUp"
        isActive={isActive}
        setIsActive={setIsActive}
        navigation={navigation}
      />
    </View>
  );
}
