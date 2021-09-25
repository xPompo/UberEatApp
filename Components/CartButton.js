import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { useSelector } from "react-redux";

export default function CartButton(props) {
  const totalAmount = useSelector((state) => state.cartReducer.totalAmount);
  const { height } = Dimensions.get("window");

  const viewCartHandler = () => {
    props.navigation();
  };

  return (
    <>
      {totalAmount !== 0 && (
        <TouchableOpacity
          onPress={viewCartHandler}
          activeOpacity={0.8}
          style={{
            flex: 1,
            width: "90%",
            backgroundColor: "black",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: height * 0.8,
            zIndex: 999,
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                paddingHorizontal: 20,
                paddingVertical: 10,
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              View cart
            </Text>
            <Text
              style={{
                color: "white",
                position: "absolute",
                top: "30%",
                left: "45%",
                fontSize: 12,
              }}
            >
              $ {totalAmount.toFixed(1)}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}
