import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import { authStateChangeUser } from "./redux/auth/authOperations";
import { useRoute } from "./router";

const Main = () => {
 
  const {stateChange} = useSelector((state) => state.auth);
  const routing = useRoute(stateChange);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
