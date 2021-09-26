import React from "react";
import { View, Text, Platform, StatusBar, ScrollView } from "react-native";
import MenuItems from "../Components/MenuItems";
import LottieView from "lottie-react-native";

export default function Orders(props) {
  const arrayFood = props.route.params.Arrayfood;
  const total = props.route.params.totalAmount;
  const name = props.route.params.name;
  console.log(arrayFood);

  return (
    <>
      {arrayFood ? (
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginTop:
                Platform.OS === "android" ? StatusBar.currentHeight : 0,
              backgroundColor: "#458",
              width: "100%",
              paddingVertical: 20,
              marginBottom: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View>
              <LottieView
                loop={false}
                autoPlay
                speed={0.8}
                source={require("../assets/animations/check-mark.json")}
                style={{ height: 150 }}
              />
            </View>
            <Text
              style={{ fontWeight: "bold", color: "white", letterSpacing: 0.5 }}
            >{` Your order from ${name} cost ${total} USD`}</Text>
          </View>
          <ScrollView
            style={{ width: "90%" }}
            showsVerticalScrollIndicator={false}
          >
            <MenuItems hideCheckBox={true} arrayFood={arrayFood} />
          </ScrollView>
          <View
            style={{
              marginBottom: 20,
            }}
          >
            <LottieView
              loop={false}
              autoPlay
              speed={0.5}
              source={require("../assets/animations/cooking.json")}
              style={{ height: 150, backgroundColor: "transparent" }}
            />
          </View>
        </View>
      ) : (
        <Text>You Dont Make Any orders Yet</Text>
      )}
    </>
  );
}
