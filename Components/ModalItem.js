import React from "react";
import { useSelector } from "react-redux";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import firebase from "../firebase";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Setting a timer"]);

export default function ModalItem(props) {
  const { isModalVisible, setIsModalVisible, totalAmount, name, navigation } =
    props;
  const Arrayfood = useSelector((state) => state.cartReducer.items);

  const payNowHandler = (navigation) => {
    const db = firebase.firestore();
    db.collection("Orders").add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      items: Arrayfood,
      resturanName: name,
    });
    navigation.navigate("Orders");
    setIsModalVisible(false);
  };

  return (
    <Modal
      statusBarTranslucent={true}
      animationType="slide"
      visible={isModalVisible}
      transparent={true}
      onRequestClose={() => setIsModalVisible(false)}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0,0,0,.7)",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#eee",
          }}
        >
          <View style={styles.ResturanNameContainer}>
            <Text style={styles.ResturanName}>{name}</Text>
          </View>
          {Arrayfood.map((el, index) => (
            <View key={index} style={styles.foodItemsContainer}>
              <Text style={styles.foodItemName}>{el.name}</Text>
              <Text style={styles.foodItemPrice}>{el.price} $</Text>
            </View>
          ))}
          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalAmountText}>Your Subtotal is :</Text>
            <Text style={styles.totalAmountPrice}>{totalAmount} USD</Text>
          </View>
          <View style={styles.payBtnContainer}>
            <TouchableOpacity onPress={() => payNowHandler(navigation)}>
              <Text style={styles.payBtn}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  ResturanNameContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#794",
    height: 40,
  },
  ResturanName: { color: "white", fontSize: 18, fontWeight: "bold" },
  foodItemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginTop: 15,
  },
  foodItemName: { fontSize: 14, fontWeight: "bold" },
  foodItemPrice: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
    width: 80,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#999",
    textAlign: "center",
    textAlignVertical: "center",
  },
  payBtnContainer: { marginVertical: 40 },
  payBtn: {
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "black",
    width: 150,
    height: 40,
    borderRadius: 20,
  },
  totalAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 15,
  },
  totalAmountText: { fontSize: 14, fontWeight: "bold" },
  totalAmountPrice: {
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
    width: 80,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#794",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
