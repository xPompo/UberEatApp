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
  console.log(props);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
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

      <CartButton navigation={props.navigation} name={name} />
    </View>
  );
}
