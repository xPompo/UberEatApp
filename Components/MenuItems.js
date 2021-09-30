import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

export default function MenuItems(props) {
  const { arrayFood, hideCheckBox } = props;
  const dispatch = useDispatch();

  const checkFoodHandler = (item, check) => {
    console.log(check);
    if (check) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          tittle: item.tittle,
          price: item.price,
          image: item.image,
        },
      });
    } else {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          tittle: item.tittle,
          price: item.price,
          image: item.image,
        },
      });
    }
  };
  const cartItems = useSelector((state) => state.cartReducer.items);
  const isFoodIn = (food, cartItems) => {
    return Boolean(cartItems.find((item) => item.name === food.tittle));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {arrayFood.map((el, index) => (
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
            {hideCheckBox ? (
              <></>
            ) : (
              <BouncyCheckbox
                onPress={(check) => checkFoodHandler(el, check)}
                size={25}
                iconStyle={{ borderColor: "green", borderRadius: 5 }}
                fillColor="green"
                isChecked={isFoodIn(el, cartItems)}
              />
            )}
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
