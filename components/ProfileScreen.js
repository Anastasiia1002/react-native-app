//ProfileScreen

//PostsScreen

import React, { useCallback, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import Icon from "../components/icon";
import * as ImagePicker from "expo-image-picker";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Post from "./Post"


export default function ProfileScreen() {
  const [image, setImage] = useState("");


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

  const delPhotoHandler = () => {
    setImage("");
  };
  return (
    <ImageBackground
    source={require("../assets/BGRimage/bgLogReg.png")}
    resizeMode="cover"
    style={styles.image}
  >   
   <View style={styles.container}>
            <View style={styles.box}>
             
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
                <Text style={styles.title}> Natali Romanova</Text>
            
            
<Post/>
              
            
              
            </View>
          </View>
          {/* <View style={styles.footer}>
        <Pressable
          onPress={""}
          
        >
          <Icon
            name="MenuIcon"
            fill="rgba(33, 33, 33, 0.8)"
            width="18"
            height="18"
          />
        </Pressable>

        <Pressable onPress={""} style={styles.buttonAdd}>
          <Icon name="UserIcon" fill="#FFFFFF" width="24" height="24" />
        </Pressable>

        <Pressable
          onPress={""}
          
        >
          <Icon
            name="PlusPost"
            fill="rgba(33, 33, 33, 0.8)"
            width="14"
            height="14"
            top='-10'
          />
        </Pressable>
      </View> */}

  </ImageBackground>
)}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  box: {
    position: "relative",
width: "100%",
    // paddingLeft: 16,
    // paddingRight: 16,
    paddingTop: 92,
    backgroundColor: "#FFFFFF",

    justifyContent: "flex-start",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
    flex: 0.8,
  },
  boxImage: {
    flex: 1,
    position: "absolute",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "column",
    top: -60,
    right: Dimensions.get("window").width / 2 +50,
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
  
  image: {
    flex: 1,
    justifyContent: "center",
  },
  footer: {
    flex: 0.1,
    flexDirection: "row",
    // paddingTop: 10,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    // backgroundColor: "green",
    alignItems: "center",
  },
  buttonAdd: {
    paddingHorizontal: 23,
    paddingVertical: 8,
    width: 70,
    height: 40,
    marginHorizontal: 42,
    // gap: 12px;

    // marginBottom: 113,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
});
