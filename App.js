import { StatusBar } from "expo-status-bar";
import React from "react";
import MainNav from "./Naviagtion/Nav";

export default function App() {
  return (
    <>
      <MainNav />
      <StatusBar style="auto" />
    </>
  );
}
