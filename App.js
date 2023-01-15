import React, { useState } from "react";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from './components/Home'
export default function App() {
  const [isFirthPage, setIsFirthPage] = useState(true);
  return (
    <>
    <Home/> 
    {/* {isFirthPage && <RegistrationScreen setIsFirthPage={setIsFirthPage} />}
      { !isFirthPage && <LoginScreen setIsFirthPage={setIsFirthPage} />} */}
    </>
  );
}
