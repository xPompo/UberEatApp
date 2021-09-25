import React from "react";
import { View, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function AboutUs(props) {
  const { name, image, rating, price, reviews, categories } = props;
  return (
    <View
      style={{
        width: "100%",
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        marginBottom: 15,
      }}
    >
      <RestImage image={image} />
      <RestTitle
        name={name}
        rating={rating}
        price={price}
        reviews={reviews}
        categories={categories}
      />
      <Divider orientation="horizontal" width={1} color="#888" />
    </View>
  );
}

const RestImage = (props) => {
  return (
    <View>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 150, resizeMode: "cover" }}
      />
    </View>
  );
};

const RestTitle = (props) => {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "#eee",
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{props.name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{ fontSize: 12, color: "#888", paddingHorizontal: 4 }}
          >{`${props.price}. ${props.categories[0].alias} . ${props.categories[0].title} (${props.reviews}+).`}</Text>
          <AntDesign
            name="star"
            size={12}
            style={{ fontSize: 12, color: "orange", paddingHorizontal: 4 }}
          />
          <Text style={{ fontSize: 12, color: "#888" }}>{props.rating}</Text>
        </View>
      </View>
    </View>
  );
};
