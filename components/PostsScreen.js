//PostsScreen

import React, { useCallback, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  StatusBar,
  Text,
  View,
  ScrollView,
  
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Dimensions,
  Image,
} from "react-native";
import Icon from "./icon";
import Post from "./Post"

export default function PostsScreen({navigation}) {
  const handlerLogOut = () => {
    console.log("onclick");
  };

  const handlerOpenComments=() => {
  }
  const handlerOpenLocations=() => {
  }
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS == "ios" ? "padding" : "height"}
    //   style={styles.containerView}
    // >
    //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
    <SafeAreaView  style={styles.container}>

      <View style={styles.user}>
      <View style={styles.userInfo}>
      <Image  source={require("../assets/BGRimage/bgLogReg.png")} style={styles.userImage} />
      <View >
      <Text style={styles.userName}>Natali Romanova</Text>
      <Text style={styles.userEmail}>email@example.com</Text>
      </View>
        </View>
        </View>
      
     <Post navigation={navigation}/>
      
    </SafeAreaView>
    /* </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView> */
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    flexDirection: "column",
   
  },
  header: {
    //  flex: 0.1,
     paddingVertical: 10,
    // height: 60,
    // paddingTop: 10,
    
    // paddingBottom: 10,
    alignItems: "center",
    position: "relative",

    justifyContent: "flex-end",
    borderBottomColor: "#BDBDBD",
    border: "solid",
    borderBottomWidth: 1,
  },
  statusBarStyle: {
    // backgroundColor: "green",
  },

  iconLog: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },

  text: {
    // fontWeight: 500,

    fontSize: 17,
    lineHeight: 22,

    letterSpacing: -0.4,

    color: "#212121",
  },

  user:{
    marginVertical: 32,
    marginHorizontal:16,
height:60,
  },
  userInfo:{
flexDirection: 'row',
alignItems: "center",

  },
  userImage:{
width: 60,
height: 60,
borderRadius: 16,
marginRight: 8,
  },
  userName:{
 // fontWeight: 700,
 fontSize: 13,
 lineHeight: 15,
  },
  userEmail:{
 // fontWeight: 400,
 fontSize: 11,
 lineHeight: 13,
  },

  footer: {
    flex: 0.1,
    flexDirection: "row",
    // paddingTop: 10,

    justifyContent: "center",
    // backgroundColor: "green",
    alignItems: "center",
  },
  buttonAdd: {
    paddingHorizontal: 28,
    paddingVertical: 13,
    width: 70,
    height: 40,
    marginHorizontal: 42,
    // gap: 12px;

    // marginBottom: 113,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
});
