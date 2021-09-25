import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function RestaurantItems(props) {
  const { resturantData, activetab, navigation } = props;
  const filteredData = resturantData?.filter((el) =>
    el.transactions.includes(activetab.toLowerCase())
  );

  // console.log(navigation);
  const getDetails = (id, name, image, price, reviews, rating, categories) => {
    navigation.navigate("details", {
      id,
      name,
      image,
      price,
      reviews,
      rating,
      categories,
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      decelerationRate={0}
      snapToInterval={250}
      bounces={false}
      style={{ width: "100%" }}
    >
      {filteredData?.map((el, index) => {
        return (
          <TouchableOpacity
            onPress={() =>
              getDetails(
                el?.id,
                el?.name,
                el?.image_url,
                el?.price,
                el?.review_count,
                el?.rating,
                el?.categories
              )
            }
            activeOpacity={0.8}
            key={index}
          >
            <View
              style={{
                width: "100%",
                marginTop: 15,
                elevation: 5,
                shadowOffset: { width: 5, height: 5 },
                shadowColor: "black",
                shadowOpacity: 0.5,
              }}
            >
              <RestImage image={el?.image_url} />
              <RestTitle name={el?.name} rating={el?.rating} />
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const RestImage = (props) => {
  return (
    <View>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 200, resizeMode: "cover" }}
      />
      <TouchableOpacity
        style={{
          position: "absolute",
          zIndex: 1,
          top: 20,
          right: 20,
        }}
      >
        <AntDesign
          name="hearto"
          size={20}
          style={{
            color: "white",
          }}
        />
      </TouchableOpacity>
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
        <Text style={{ fontSize: 12, color: "#888" }}>35-34 min</Text>
      </View>
      <View>
        <Text
          style={{
            backgroundColor: "white",
            width: 35,
            height: 35,
            borderRadius: 50,
            textAlign: "center",
            textAlignVertical: "center",
            fontSize: 14,
            color: "#888",
          }}
        >
          {props.rating}
        </Text>
      </View>
    </View>
  );
};
