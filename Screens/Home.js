import React, { useState, useEffect } from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";
import HeaderTab from "../Components/HeaderTab";
import Search from "../Components/Search";
import Categories from "../Components/Categories";
import RestaurantItems from "../Components/RestaurantItems";

export default function Home({ navigation }) {
  const [resturantData, setResturantData] = useState(null);
  const [activetab, setActiveTab] = useState("Delivery");

  useEffect(() => {
    getResturantsData();
  }, [activetab]);

  const getResturantsData = () => {
    const API_KEY =
      "pKtebFEJarC2hYPV4cdgOzDeNGpjOcsWY3BvcFpY9ssxvsIlAkH-Ecn31-z-6UMudGjdv4r3oZoJ7978qb9eA3hhtoIMX-XGmiMXQONM4rju4ZWGdw5cUvm9enpKYXYx";
    const URL =
      "https://api.yelp.com/v3/businesses/search?term=resturants&location=SanDiego";
    fetch(URL, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((json) => setResturantData(json.businesses));
  };

  console.log(resturantData);
  return (
    <SafeAreaView
      style={{
        width: "100%",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <HeaderTab activetab={activetab} setActiveTab={setActiveTab} />
      <Search />
      <Categories />
      <RestaurantItems
        resturantData={resturantData}
        activetab={activetab}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}
