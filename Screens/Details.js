import React from "react";
import { View, StatusBar, Platform } from "react-native";
import AboutUs from "../Components/AboutUs";
import MenuItems from "../Components/MenuItems";
import CartButton from "../Components/CartButton";

export default function Details(props) {
  const id = props.route.params.id;
  const name = props.route.params.name;
  const image = props.route.params.image;
  const rating = props.route.params.rating;
  const reviews = props.route.params.reviews;
  const price = props.route.params.price;
  const categories = props.route.params.categories;

  return (
    <View
      style={{
        width: "100%",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AboutUs
        name={name}
        image={image}
        rating={rating}
        price={price}
        categories={categories}
        reviews={reviews}
      />
      <MenuItems
        id={id}
        name={name}
        image={image}
        rating={rating}
        price={price}
        categories={categories}
        reviews={reviews}
      />
      <CartButton />
    </View>
  );
}
