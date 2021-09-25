import React, { useState } from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import ModalItem from "./ModalItem";
import ViewCartItem from "./ViewCartItem";

export default function CartButton({ navigation, name }) {
  const totalAmount = useSelector((state) => state.cartReducer.totalAmount);

  const [isModalVisible, setIsModalVisible] = useState(false);

  if (isModalVisible) {
    return (
      <ModalItem
        totalAmount={totalAmount}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        name={name}
        navigation={navigation}
      />
    );
  } else {
    return (
      <>
        {totalAmount !== 0 && (
          <ViewCartItem
            setIsModalVisible={setIsModalVisible}
            totalAmount={totalAmount}
          />
        )}
      </>
    );
  }
}
