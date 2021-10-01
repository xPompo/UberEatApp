import React from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import { FlatList } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function RestaurantDetail({ navigation }) {
  const displayName = firebase.auth().currentUser.displayName;
  const RenderData = [
    { head: "Order History", iconName: "shoppingcart" },
    { head: "Discounts", iconName: "tagso" },
    { head: "Setting", iconName: "setting" },
    { head: "Help", iconName: "question" },
    { head: "Logout", iconName: "logout" },
  ];

  const renderHandlerItems = ({ item }) => {
    const ProfileBtnPressHandler = () => {
      console.log(item.head);
      if (item.head === "Logout") {
        firebase
          .auth()
          .signOut()
          .then(() => {
            navigation.navigate("Login");
          });
      }
    };

    return (
      <TouchableOpacity onPress={ProfileBtnPressHandler}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginBottom: 40,
            width: "100%",
          }}
        >
          <AntDesign
            style={{ alignItems: "flex-start" }}
            size={25}
            name={item.iconName}
            color="#555"
          />
          <View
            style={{
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "900",
              }}
            >
              {item.head}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "80%",
          marginVertical: 50,
        }}
      >
        <Image
          style={{
            width: 120,
            height: 120,
            marginRight: 10,
            resizeMode: "cover",
            borderRadius: 10,
          }}
          source={{
            uri: "https://thumbs.dreamstime.com/b/brand-persona-abstract-concept-vector-illustration-personalization-customer-identification-target-marketing-qualities-213577697.jpg",
          }}
        />
        <View>
          <Text style={{ fontSize: 30 }}>Hello,</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            {displayName}
          </Text>
        </View>
      </View>
      <View style={{ width: "80%" }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.head}
          data={RenderData}
          renderItem={renderHandlerItems}
        />
      </View>
    </View>
  );
}
