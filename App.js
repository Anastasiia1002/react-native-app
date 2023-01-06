import React, { useState } from "react";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  const [isFirthPage, setIsFirthPage] = useState(true);
  return (
    <>
      {isFirthPage && <RegistrationScreen setIsFirthPage={setIsFirthPage} />}
      {!isFirthPage && <LoginScreen setIsFirthPage={setIsFirthPage} />}
    </>
  );
}
