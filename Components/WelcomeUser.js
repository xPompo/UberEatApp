import React from "react";
import { View, Text } from "react-native";
import { Colors } from "../Constant/Colors";

export default function WelcomeUser(props) {
  const user = props.route.params?.user;
  return (
    <View
      style={{
        backgroundColor: `${Colors.main}`,
        height: 160,
        justifyContent: "center",
        width: "100%",
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 44, color: "white" }}>Welcome </Text>
        <Text
          style={{
            fontSize: 44,
            color: "white",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {user},
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          color: "#eee",
          textTransform: "capitalize",
          width: "70%",
          lineHeight: 25,
          letterSpacing: 0.2,
        }}
      >
        Hello Beautiful, We are happy to see you again.
      </Text>
    </View>
  );
}
