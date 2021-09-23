import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home";
import Browse from "../Screens/Browse";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Grocery from "../Screens/Grocery";
import Orders from "../Screens/Orders";
import Account from "../Screens/Account";

const Tab = createMaterialBottomTabNavigator();
export default function Nav() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="tomato"
        inactiveColor="#888"
        barStyle={{
          backgroundColor: "#ddd",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <AntDesign name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: "Account",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Browse"
          component={Browse}
          options={{
            tabBarLabel: "Browse",
            tabBarIcon: ({ color }) => (
              <AntDesign name="search1" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Grocery"
          component={Grocery}
          options={{
            tabBarLabel: "Grocery",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="shopping-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarLabel: "Orders",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="ticket" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
