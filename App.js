import { StatusBar } from "expo-status-bar";
import React from "react";
import MainNav from "./Naviagtion/Nav";
import reducer from "./redux/reducer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({ cartReducer: reducer });
const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}>
      <MainNav />
      <StatusBar style="auto" />
    </Provider>
  );
}
