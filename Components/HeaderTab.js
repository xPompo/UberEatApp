import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../Constant/Colors";

export default function HeaderTab({ activetab, setActiveTab }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <HeaderButton
        text="Delivery"
        activetab={activetab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activetab={activetab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}
export const HeaderButton = ({ text, activetab, setActiveTab }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        setActiveTab(text);
      }}
    >
      <Text
        style={{
          backgroundColor: activetab === text ? `${Colors.main}` : "white",
          color: activetab === text ? "white" : `${Colors.main}`,
          paddingHorizontal: 30,
          paddingVertical: 10,
          borderRadius: 20,
          margin: 10,
          shadowColor: "rgba(0,0,0,.2)",
          shadowOffset: { width: 5, height: 5 },
          shadowRadius: 10,
          elevation: 3,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
