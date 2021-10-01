import React from "react";
import {
  View,
  Text,
  Platform,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MenuItems from "../Components/MenuItems";
import LottieView from "lottie-react-native";
import { Colors } from "../Constant/Colors";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useSelector } from "react-redux";

export default function Orders(props) {
  const arrayFood = useSelector((state) => state.cartReducer.items);
  const total = useSelector((state) => state.cartReducer.totalAmount);
  const name = useSelector((state) => state.cartReducer.resturantName);

  console.log(arrayFood);
  const goHomeHandler = () => {
    props.navigation.navigate("Home");
  };
  return (
    <>
      {total !== 0 ? (
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
          <TouchableOpacity activeOpacity={0.8} onPress={goHomeHandler}>
            <View
              style={{
                backgroundColor: `${Colors.main}`,
                width: 60,
                height: 60,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 30,
              }}
            >
              <AntDesign name="home" size={30} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <NoOrdersComp {...props} />
      )}
    </>
  );
}

const NoOrdersComp = (props) => {
  const goHomeHandler = () => {
    props.navigation.navigate("Home");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          marginBottom: 50,
          width: "80%",
        }}
      >
        <Text
          style={{
            fontSize: 33,
            color: `${Colors.main}`,
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          You Dont Make Any orders Yet...
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 16,
            color: `#888`,
            width: "90%",
            lineHeight: 25,
            textTransform: "lowercase",
          }}
        >
          Please make sure you make at least one order.
        </Text>
      </View>
      <LottieView
        source={require("../assets/animations/cartEmpty.json")}
        speed={0.5}
        autoPlay
        style={{ width: 300, height: 150, marginBottom: 50 }}
      />
      <TouchableOpacity activeOpacity={0.8} onPress={goHomeHandler}>
        <View
          style={{
            backgroundColor: `${Colors.main}`,
            width: 100,
            height: 100,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="home" size={40} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
