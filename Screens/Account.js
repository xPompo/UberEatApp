import React from "react";
import { View, Text, Platform, StatusBar } from "react-native";

export default function RestaurantDetail() {
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Text>Account Details</Text>
    </View>
  );
}
