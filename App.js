import React, { useState , useEffect} from "react";
import { Button } from "react-native";
import { Provider, useSelector } from "react-redux";

import { store } from "./src/redux/store";
import Main from "./src/Main";

export default function App() {

  return (
    <Provider store={store}>
  <Main/>
    </Provider>
  )
}
