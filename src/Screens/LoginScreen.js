import React, { useCallback, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import {authSingInUser} from '../redux/auth/authOperations'
import { useDispatch } from "react-redux";
import Icon from "../components/icon";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function LoginScreen({ navigation, route }) {
  const dispatch= useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(true);

  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto/Roboto-Medium.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  const onLogin = () => {
    Alert.alert("Welcome", `${email}`);
    console.log( email, password);

    setPassword("");
    setEmail("");

  };
  const handleSubmit=() => {
    if(!email || !password) {
      Alert.alert("Please enter your email and password");
      return
    }
    // navigation.navigate("Home",{ sessionId: 45, userId: "22e24" })
    console.log(email, password);
    dispatch(authSingInUser(dataUser))
  
      setPassword("");
      setEmail("");
      
   }
  const dataUser={
    email, password
  }


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.containerView}
    >
      <ImageBackground
        source={require("../../assets/BGRimage/bgLogReg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View 
               onLayout={onLayoutRootView}
              >
                
                <Text style={styles.title}> Login</Text>
                <View>
                  <TextInput
                    value={email}
                    onChangeText={emailHandler}
                    placeholder="Email address"
                    placeholderTextColor="#BDBDBD"
                    style={styles.input}
                  />
                  <View style={styles.showPasswordView}>
                    <TextInput
                      value={password}
                      onChangeText={passwordHandler}
                      placeholder="Password"
                      secureTextEntry={isShown}
                      placeholderTextColor="#BDBDBD"
                      //   secureTextEntry={true}
                      style={styles.input}
                    />
                    <Pressable
                      style={styles.viewPassword}
                      onPress={() => {
                        setIsShown(!isShown);
                      }}
                    >
                      {!isShown ? (
                       
                          <Icon
                            style={styles.passwordText}
                            name="VisibilityOff"
                            fill="#1B4371"
                            width="20"
                            height="20"
                          />
                  
                      ) : (
                 
                          <Icon
                            style={styles.passwordText}
                            name="VisibilityOn"
                            fill="#1B4371"
                            width="20"
                            height="20"
                          />
                       
                      )}
                    </Pressable>
                  </View>
                </View>

                <TouchableOpacity
                  title={"Registration"}
                  style={styles.button}
                  onPress={handleSubmit}
                >
                  <Text style={styles.text}>Login in</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate("RegistrationScreen",
                // { sessionId: 45, userId: "22e24" }
                )}>
                <Text style={styles.account} >
                  Don't have an account? Registration
                </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
 
  title: {
    textAlign: "center",
    marginBottom: 32,
  
    // fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,

    letterSpacing: 0.01,

    color: "#212121",
  },
  box: {
    position: "relative",

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    backgroundColor: "#FFFFFF",

    justifyContent: "flex-start",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    flex: 0.51,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
   
    backgroundColor: "#F6F6F6",
    width:  Dimensions.get("window").width-32,
    height: 50,
    padding: 16,

    borderColor: "#E8E8E8",
    marginBottom: 10,
    gap: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  viewPassword: {
    height: "100%",
    position: "absolute",
    right: 16,
  },
  passwordText: {
    marginVertical: 15,
  },
  button: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 13,
    width: Dimensions.get("window").width-32,
    maxHeight: 50,
    marginTop: 27,
    // gap: 12px;

    // marginBottom: 113,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  text: {
    // fontFamily: "Roboto-Medium",
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    // lineHeight: 1.18,
  },
  account: {
    marginVertical: 16,
    textAlign: "center",
    color: "#1B4371",
  },
});

