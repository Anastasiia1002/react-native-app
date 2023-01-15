//Home

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

import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CommentsScreen from "./CommentsScreen";
import CreatePostsScreen from "./CreatePostsScreen";


export default function Home() {



  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.containerView}
    >
  
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>

          {/* <ScrollView style={styles.container}> */}
{/* <ProfileScreen/> */}

         {/* <PostsScreen/> */}
       {/* <CommentsScreen/> */}
<CreatePostsScreen/>

         {/* </ScrollView> */}
          </View>
        </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: "#E5E5E5",
      },
      container:{
        flex: 1,
      },
    
});
