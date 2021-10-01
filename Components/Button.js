import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Colors } from "../Constant/Colors";

export default function Button({ text, isActive, setIsActive, navigation }) {
  const navHandler = () => {
    setIsActive(text);
    navigation.navigate(text);
  };

  return (
    <TouchableOpacity onPress={navHandler}>
      <View
        style={{
          paddingHorizontal: 5,
          paddingVertical: 10,
          borderBottomWidth: 1.5,
          borderRadius: 1,
          borderBottomColor: isActive === text ? `${Colors.main}` : "#999",
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            color: isActive === text ? `${Colors.main}` : "#999",
            fontSize: isActive === text ? 14 : 10,
            fontWeight: isActive === text ? "bold" : "normal",
          }}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
