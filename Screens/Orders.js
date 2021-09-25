import React from "react";
import { View, Text, Platform, StatusBar } from "react-native";
import { useSelector } from "react-redux";

export default function Orders() {
  const totalAmount = useSelector((state) => state.cartReducer.totalAmount);
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Text>Orders Amount {totalAmount}</Text>
    </View>
  );
}
