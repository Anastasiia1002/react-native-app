import React, { useCallback, useState } from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "../components/icon";
import * as ImagePicker from "expo-image-picker";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import {authSingUpUser} from '../redux/auth/authOperations'
import { useDispatch } from "react-redux";

import {styles} from "./styledRegistrationScreen"
// SplashScreen.preventAutoHideAsync();

export default function RegistrationScreen({ navigation ,route}) {
const dispatch= useDispatch()

  const [image, setImage] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(true);

  const loginHandler = (text) => setLogin(text);
  const passwordHandler = (text) => setPassword(text);
  const emailHandler = (text) => setEmail(text);

  // const [fontsLoaded] = useFonts({
  //   "Roboto-Regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
  //   "Roboto-Bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
  //   "Roboto-Medium": require("../../assets/fonts/Roboto/Roboto-Medium.ttf"),
  // });
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
 
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }


 const handleSubmit=() => {
  if(!email || !password ||!login) {
    Alert.alert("Please enter your login, email and password");
    return
  }
  // navigation.navigate("Home",{ sessionId: 45, userId: "22e24" })
  console.log(dataUser);
  dispatch(authSingUpUser(dataUser))
  // Alert.alert("Welcome", `${login}`);
  setLogin("");
    setPassword("");
    setEmail("");
    setImage("");
 }
const dataUser={
  image, login, email, password
}
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
        source={require("../../assets/BGRimage/bgLogReg.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.box}>
              <View 
              // onLayout={onLayoutRootView}
              >
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
                    <TouchableOpacity
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
                    </TouchableOpacity>
                  </View>
                </View>

                <TouchableOpacity
                  title={"Registration"}
                  style={styles.button}
                  onPress={handleSubmit}
                >
                  <Text style={styles.text}>Registration</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate("LoginScreen",)}>
  
                <Text style={styles.account} >
                  Do you have an account? Login in
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


