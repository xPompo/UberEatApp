import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../Screens/Home";

const Tab = createMaterialBottomTabNavigator();
export default function Nav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
