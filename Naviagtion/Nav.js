import React, { useState } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../Screens/Home";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Orders from "../Screens/Orders";
import Account from "../Screens/Account";
import Details from "../Screens/Details";
import SignUp from "../Screens/SignUp";
import Login from "../Screens/Login";
import Browse from "../Screens/Browse";
import Grocery from "../Screens/Grocery";
import OrdersFake from "../Screens/OrdersFake";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Nav() {
  return (
    <Tab.Navigator
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
      {/* <Tab.Screen
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
        name="OrdersFake"
        component={OrdersFake}
        options={{
          tabBarLabel: "OrdersFake",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
const MainNav = () => {
  const [isActive, setIsActive] = useState("Login");
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="mainHome" component={Nav} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="SignUp">
          {(props) => {
            return (
              <SignUp
                {...props}
                isActive={isActive}
                setIsActive={setIsActive}
              />
            );
          }}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {(props) => {
            return (
              <Login {...props} isActive={isActive} setIsActive={setIsActive} />
            );
          }}
        </Stack.Screen>

        <Stack.Screen
          name="details"
          component={Details}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitleAlign: "center",
            headerLeft: () => {
              return (
                <Ionicons
                  onPress={() => navigation.goBack()}
                  name="chevron-back"
                  size={20}
                />
              );
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainNav;
