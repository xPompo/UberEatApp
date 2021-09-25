import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

export default function MenuItems() {
  const dispatch = useDispatch();

  const food = [
    {
      tittle: "indian Food",
      description: "Top food deliveries for Brits looking for a taste of home",
      price: 13.2,
      image: "https://ychef.files.bbci.co.uk/976x549/p07cj8zj.jpg",
    },
    {
      tittle: "Basta",
      description:
        "For just 9.99$ you’ll get a three-course meal and a welcome drink",
      price: 9.8,
      image: "https://www.timeoutdubai.com/public/images/2019/05/09/Basta.jpg",
    },
    {
      tittle: "Fried Chicken",
      description: "Foodie-centric Thai brunch at a revamped classic",
      price: 11.9,
      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg",
    },
    {
      tittle: "Beef Burger",
      description:
        "We’ve got an inkling you’re going to enjoy making your way through this list",
      price: 18.9,
      image:
        "https://www.seriouseats.com/thmb/59y0pluOraHrEINr2g667Oa5qBg=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__04__04022014-stirfry-beef-with-mixed-mushroom-and-butter-15-edit-5840b1f5917f4f08a1ba61fd86241876.jpg",
    },
  ];

  const checkFoodHandler = (item, check) => {
    console.log(check);
    if (check) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, tittle: item.tittle, price: item.price },
      });
    } else {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: { ...item, tittle: item.tittle, price: item.price },
      });
    }
  };
  const cartItems = useSelector((state) => state.cartReducer.items);
  // console.log(cartItems);
  const isFoodIn = (food, cartItems) => {
    return Boolean(cartItems.find((item) => item.name === food.tittle));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {food.map((el, index) => (
        <View
          key={index}
          style={{
            width: "95%",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <BouncyCheckbox
              onPress={(check) => checkFoodHandler(el, check)}
              size={25}
              iconStyle={{ borderColor: "green", borderRadius: 5 }}
              fillColor="green"
              isChecked={isFoodIn(el, cartItems)}
            />
            <MenuTitle
              tittle={el.tittle}
              description={el.description}
              price={el.price}
            />
            <MenuImage image={el.image} />
          </View>
          <Divider orientation="horizontal" width={0.5} color="#888" />
        </View>
      ))}
    </ScrollView>
  );
}

const MenuTitle = (props) => {
  return (
    <View style={{ width: "40%" }}>
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>{props.tittle}</Text>
      <Text style={{ color: "#888", fontSize: 12 }}>{props.description}</Text>
      <Text style={{ fontSize: 12 }}>{props.price} $</Text>
    </View>
  );
};

const MenuImage = (props) => {
  return (
    <Image
      style={{
        width: 120,
        height: 80,
        resizeMode: "cover",
        borderRadius: 10,
        marginLeft: 10,
      }}
      source={{
        uri: props.image,
      }}
    />
  );
};
