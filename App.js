import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native";

import { useRoute } from "./router";



export default function App() {
  // const [isFirthPage, setIsFirthPage] = useState(true);

const routing= useRoute(false)

  return (
    <NavigationContainer>
     {routing}
    </NavigationContainer>
  );
}
