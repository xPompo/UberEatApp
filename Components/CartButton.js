import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function CartButton() {
  const totalAmount = useSelector((state) => state.cartReducer.totalAmount);
  console.log("total Amount is : " + totalAmount);
  return (
    <>
      {totalAmount !== 0 && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flex: 1,
            width: "90%",
            backgroundColor: "black",
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "98%",
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
              $ {totalAmount}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}
