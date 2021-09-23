import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { CheckBox } from "react-native-elements";

export default function MenuItems(props) {
  const { id } = props;
  return (
    <View
      style={{
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CheckBox
        checkedColor="green"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={false}
      />
      <MenuTitle />
      <MenuImage />
    </View>
  );
}

const MenuTitle = (props) => {
  return (
    <View>
      <Text>titile</Text>
      <Text>descrpi</Text>
      <Text>price</Text>
    </View>
  );
};

const MenuImage = () => {
  return (
    <Image
      style={{ width: 80, height: 80, resizeMode: "contain" }}
      source={{
        uri: "http://cdn.cnn.com/cnnnext/dam/assets/191206115758-1-shakshouka-photo-courtesy-emeco-travel-etpb-.jpg",
      }}
    />
  );
};
