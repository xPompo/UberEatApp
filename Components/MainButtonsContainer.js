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
        flexDirection: "row",
        justifyContent: "center",
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
