import React from "react";
import { StatusBar } from "expo-status-bar";
import { MainScreen } from "./src/screens/MainScreen";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <MainScreen />
    </Provider>
  );
}
