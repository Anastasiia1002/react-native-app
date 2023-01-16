//CreatePostsScreen

import React, { useCallback, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  // Pressable,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";
import Icon from "../components/icon";
import * as ImagePicker from "expo-image-picker";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

export default function CreatePostsScreen() {
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [name, setName] = useState("");


  const locationHandler = (text) => setLocation(text);
  const nameHandler = (text) => setName(text);

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
    console.log(image, result);
  });
  const editPhotoHandler = useCallback(async () => {
    setImage("");
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    console.log(image, result);
  });
  const handlerBack = () => {
    console.log("Back");
  };

  const onCreatePost = () => {
    console.log(image, name, location);
  };

  const handleClear =()=>{
    setImage('')
    setLocation('')
    setName('')
  }
  return (
  
   <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.containerView}
     >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <ScrollView>
      <View style={styles.bodySection}>
      <View style={styles.body}>
        {/* <View style={styles.boxImage}> */}
        {!image ? (
          <View style={styles.boxImage}>
            <TouchableOpacity
              title={"add"}
              style={styles.buttonPlus}
              onPress={AddPhotoHandler}
            >
              <Icon name="CameraIcon" fill="#BDBDBD" width="24" height="24" />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.addBox}>
            <Image source={{ uri: image }} style={styles.addImage} />
            <TouchableOpacity
              title={"add"}
              style={styles.buttonEdit}
              onPress={editPhotoHandler}
            >
              <Icon name="CameraIcon" fill="#FFFFFF" width="24" height="24" />
            </TouchableOpacity>
          </View>
        )}

        {/* </View> */}
        {!image ? (
          <TouchableOpacity
            title={"add"}
            // style={styles.buttonPlus}
            onPress={AddPhotoHandler}
          >
            <Text style={styles.photoText}> Upload photo</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            title={"edit"}
            // style={styles.buttonPlus}
            onPress={AddPhotoHandler}
          >
            <Text style={styles.photoText}> Edit photo</Text>
          </TouchableOpacity>
        )}

<TextInput
                    value={name}
                    onChangeText={nameHandler}
                    placeholder="Name of the post..."
                    placeholderTextColor="#BDBDBD"
                    style={styles.input}
                  />
                  <View style={styles.inputIcon}>
                      <TextInput
                    value={location}
                    onChangeText={locationHandler}
                    placeholder="Location..."
                    placeholderTextColor="#BDBDBD"
                    style={styles.inputLoc}
                  />
                  <Icon
            name="MapLocation"
            fill='#BDBDBD'
            width="15"
            height="24"
            style={styles.icon}
          />
</View>
        <TouchableOpacity
          title={"Publish"}
          style={[styles.button, { backgroundColor: (!name|| !location||!image) ? '#F6F6F6' : '#FF6C00' }]}
          onPress={onCreatePost}
          // disabled={true}
          disabled={!name|| !location||!image}
        >
          <Text style={[styles.textButton,{color: (!name|| !location||!image) ?'#BDBDBD' : 'white'}]    } >Publish</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.footer}>
        <TouchableOpacity onPress={()=>handleClear()} style={styles.buttonAdd}>
          <Icon name="DeleteIcon" fill="#BDBDBD" width="24" height="24" />
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
      </SafeAreaView>
      </TouchableWithoutFeedback>
      
      </KeyboardAvoidingView>  
     
  
  );
}

const styles = StyleSheet.create({
  
containerView:{
flex: 1,
},
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    // flex: 0.1,
    // height: 40,
    paddingVertical: 10,

    alignItems: "center",
    position: "relative",

    // justifyContent: "flex-end",
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
    left: 10,
  },

  text: {
    // fontWeight: 500,

    fontSize: 17,
    lineHeight: 22,

    letterSpacing: -0.4,

    color: "#212121",
  },
  bodySection:{
    flex: 1,
    justifyContent: "space-between",
  },
  body: {
     flex: 1,
    maxHeight:"100%",
    paddingHorizontal: 16,
    paddingTop: 32,
    justifyContent:'flex-start',
  },
  boxImage: {
    width: "100%",
    // height:240,
    height: (Dimensions.get("window").width - 32) * 0.7,
    borderRadius: 8,
    // marginBottom:8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
  },
  addBox: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  addImage: {
    width: "100%",
    // height:240,
    height: (Dimensions.get("window").width - 32) * 0.7,
    borderRadius: 8,
  },

  buttonPlus: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonEdit: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  photoText: {
    // font-weight: 400;
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",

    marginTop: 8,
    marginBottom:32,
  },


  input:{
height: 50,
width:(Dimensions.get("window").width - 32),
borderBottomWidth: 1,
borderBottomColor: "#E8E8E8",
 // fontWeight: 400,
 fontSize: 16,
 lineHeight: 19,


  },
  inputLoc:{
    height: 50,
    width:(Dimensions.get("window").width - 32),
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
     // fontWeight: 400,
     fontSize: 16,
     lineHeight: 19,
     paddingLeft: 24,
  },
  inputIcon:{
position: "relative",
// borderBottomWidth: 1,
// borderBottomColor: "#E8E8E8",
// paddingLeft: 12,
  },
  icon:{
position: "absolute",
top: 13,
left: 4,
  },
  button: {
    // flex: 1,
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    width: 343,
    maxHeight: 50,
    marginTop: 27,

    borderRadius: 100,
  },
  textButton: {
    // fontFamily: "Roboto-Medium",
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    // lineHeight: 1.18,
  },

  footer: {
    paddingVertical: 10,

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

    backgroundColor: "#F6F6F6",
    borderRadius: 100,
  },
});
