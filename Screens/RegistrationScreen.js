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
  Dimensions,
  Image,
} from "react-native";
import Icon from "../components/icon";
import * as ImagePicker from "expo-image-picker";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RegistrationScreen({ setIsFirthPage }) {


  const [image, setImage] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(true);

  const loginHandler = (text) => setLogin(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);
  const loginInHandler = () => setIsFirthPage(false);
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
  });
  const AddPhotoHandler = useCallback(async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  });
 
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  console.log("I am a working debugger")
  const onLogin = () => {
    Alert.alert("Welcome", `${login}`);
    console.log(image, login, email, password);
    setLogin("");
    setPassword("");
    setEmail("");
    setImage("");
  };

  const delPhotoHandler = () => {
    setImage("");
  };
  //   const loadFonts = async () => {
  //     await useFonts();
  //   };

  //   if (!isReady) {
  //     return <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)}/>
  // }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.containerView}
    >
      <ImageBackground
        source={require("../assets/BGRimage/bgLogReg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View onLayout={onLayoutRootView}>
                <View style={styles.boxImage}>
                  {!image ? (
                    <View style={styles.addBox}>
                      <Pressable
                        title={"add"}
                        style={styles.buttonPlus}
                        onPress={AddPhotoHandler}
                      >
                        <Icon
                          name="PlusIcon"
                          fill="#FF6C00"
                          width="13"
                          height="13"
                        />
                      </Pressable>
                    </View>
                  ) : (
                    <View style={styles.addBox}>
                      <Image source={{ uri: image }} style={styles.addImage} />
                      <Pressable
                        title={"add"}
                        style={styles.buttonDel}
                        onPress={delPhotoHandler}
                      >
                        <Icon
                          name="PlusIcon"
                          fill="#BDBDBD"
                          width="13"
                          height="13"
                          style={styles.icon}
                        />
                      </Pressable>
                    </View>
                  )}
                </View>
                <Text style={styles.title}> Registration</Text>
                <View>
                  <TextInput
                    value={login}
                    onChangeText={loginHandler}
                    placeholder="Login"
                    placeholderTextColor="#BDBDBD"
                    style={styles.input}
                  />
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

                <Pressable
                  title={"Registration"}
                  style={styles.button}
                  onPress={onLogin}
                >
                  <Text style={styles.text}>Registration</Text>
                </Pressable>
                <Text style={styles.account} onPress={loginInHandler}>
                  Do you have an account? Login in
                </Text>
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
  boxImage: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    top: -152,
  },
  addBox: {
    flex: 1,
    // alignItems: "center",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    //  top: -60,
    zIndex: 10,
    left: Dimensions.get("window").width / 2 - 76,
  },
  addImage: {
    flex: 1,
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 16,
    zIndex: 10,
  },

  buttonPlus: {
    borderWidth: 1,
    borderRadius: 50,
    position: "absolute",
    zIndex: 20,
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
    borderColor: "#FF6C00",
    padding: 5,
  },
  buttonDel: {
    borderWidth: 1,
    borderRadius: 50,
    position: "absolute",
    zIndex: 20,
    right: -12,
    bottom: 14,
    width: 25,
    height: 25,
    borderColor: "#BDBDBD",
    padding: 5,
  },

  icon: {
    transform: [{ rotate: "45deg" }],
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
    paddingTop: 92,
    backgroundColor: "#FFFFFF",

    justifyContent: "flex-start",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
   
    flex: 0.7,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    backgroundColor: "#F6F6F6",
    width: 343,
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
    paddingVertical: 16,
    width: 343,
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
