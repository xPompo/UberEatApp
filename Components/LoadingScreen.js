import React from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
export default function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: 0.5,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
      }}
    >
      <LottieView
        style={{ height: 200 }}
        autoPlay
        speed={0.5}
        source={require("../assets/animations/scanner.json")}
      />
    </View>
  );
}
