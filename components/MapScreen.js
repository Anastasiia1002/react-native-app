//MapScreen



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



export default function MapScreen() {

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.containerView}
    >
  
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
         
          </View>
        </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({

});
