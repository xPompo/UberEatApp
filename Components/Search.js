import React from "react";
import { View, Text, Dimensions } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Search() {
  const { width } = Dimensions.get("window");
  return (
    <View
      style={{
        flexDirection: "row",
        width: width * 0.9,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search"
        renderLeftButton={() => (
          <MaterialIcons name="place" size={24} style={{ marginLeft: 7 }} />
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              backgroundColor: "white",
              borderRadius: 20,
              elevation: 3,
              shadowColor: "black",
              shadowOffset: { width: 5, height: 5 },
              paddingHorizontal: 15,
              paddingVertical: 7,
              zIndex: 1,
              top: 6,
              right: 6,
            }}
          >
            <AntDesign name="clockcircle" size={14} />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 12,
              }}
            >
              Search
            </Text>
          </View>
        )}
        styles={{
          textInput: {
            height: 30,
            backgroundColor: "#eee",
            borderRadius: 50,
            marginTop: 7,
            fontWeight: "bold",
            paddingHorizontal: 15,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            marginRight: 10,
            alignItems: "center",
          },
        }}
      />
    </View>
  );
}
