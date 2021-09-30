import React from "react";
import { View } from "react-native";
import AboutUs from "../Components/AboutUs";
import MenuItems from "../Components/MenuItems";
import CartButton from "../Components/CartButton";

export default function Details(props) {
  const name = props.route.params?.name;
  const image = props.route.params?.image;
  const rating = props.route.params?.rating;
  const reviews = props.route.params?.reviews;
  const price = props.route.params?.price;
  const categories = props.route.params?.categories;
  console.log(props);
  const arrayFood = [
    {
      tittle: "indian Food",
      description: "Top food deliveries for Brits looking for a taste of home",
      price: 13.4,
      image: "https://ychef.files.bbci.co.uk/976x549/p07cj8zj.jpg",
    },
    {
      tittle: "Basta",
      description:
        "For just 9.99$ you’ll get a three-course meal and a welcome drink",
      price: 9.3,
      image: "https://www.timeoutdubai.com/public/images/2019/05/09/Basta.jpg",
    },
    {
      tittle: "Fried Chicken",
      description: "Foodie-centric Thai brunch at a revamped classic",
      price: 11.4,
      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg",
    },
    {
      tittle: "Beef Burger",
      description:
        "We’ve got an inkling you’re going to enjoy making your way through this list",
      price: 18.2,
      image:
        "https://www.seriouseats.com/thmb/59y0pluOraHrEINr2g667Oa5qBg=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__04__04022014-stirfry-beef-with-mixed-mushroom-and-butter-15-edit-5840b1f5917f4f08a1ba61fd86241876.jpg",
    },
  ];

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
      <MenuItems hideCheckBox={false} arrayFood={arrayFood} />

      <CartButton navigation={props.navigation} name={name} />
    </View>
  );
}
