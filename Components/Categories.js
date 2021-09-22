import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const catItems = [
  { image: require("../assets/images/shopping-bag.png"), text: "Pick-Up" },
  { image: require("../assets/images/soft-drink.png"), text: "Soft-Drinks" },
  { image: require("../assets/images/bread.png"), text: "Bakery-Item" },
  { image: require("../assets/images/fast-food.png"), text: "Fast-Food" },
];

export default function Categories() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
      }}
    >
      <CatImage />
    </View>
  );
}
const CatImage = () => {
  return (
    <>
      {catItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{
            margin: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={item.image}
            style={{ width: 50, height: 40, resizeMode: "contain" }}
          />
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </>
  );
};
