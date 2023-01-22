//CreatePostsScreen

import React, { useCallback, useState, useEffect, useRef } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  uploadBytes,
  uploadString,
  getDownloadURL,
  getMetadata,
  updateMetadata,
} from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
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
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useSelector } from "react-redux";

import {styles} from './styles'
import db from "../../firebase/config";
import Icon from "../icon";

import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

export default function CreatePostsScreen({ navigation }) {
 
  const [namePost, setNamePost] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [photo, setPhoto] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [locationText, setLocationText] = useState(null);

  const { userId, nickName } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      setPhoto(uri);
      // await MediaLibrary.createAssetAsync(uri);
    }
  };

  const handlerBack = () => {
    console.log("Back");
  };

  const onCreatePost = async () => {
    uploadPostToServer();
    navigation.navigate("Posts");
    handleClear();
  };

  const uploadPostToServer = async () => {
    let location = await Location.getCurrentPositionAsync();
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    // console.log(location)
    // await setLocation(location.coords);
    const photoUrl = await uploadPhotoToServer();
    // console.log(location)
    const data = getFirestore(db);
    const docRef = await addDoc(collection(data, "posts"), {
      locationText,
      photoUrl,
      location: coords,
      name: namePost,
      userId,
      nickName,
    });
    return docRef;
  };

  const uploadPhotoToServer = async () => {
    const response = await fetch(photo);
    const file = await response.blob();

    const uniquePhotoId = Date.now().toString();
    const storage = getStorage(db);
    const storageRef = ref(storage, `postPhoto/${uniquePhotoId}`);
    console.log(storageRef);

    const photoUrl = await uploadBytes(storageRef, file).then((snapshot) =>
      getDownloadURL(ref(storage, storageRef)).then((url) => url)
    );
    console.log(photoUrl);
    return photoUrl;
  };

  const handleClear = () => {
    setLocationText("");
    setNamePost("");
    setPhoto("");
    cameraRef("");
   
  };
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
                <View style={styles.boxImage}>
                  <Camera
                    style={styles.camera}
                    type={type}
                    ref={(ref) => {
                      setCameraRef(ref);
                    }}
                  >
                    <View style={styles.photoView}>
                      {photo && (
                        <View style={styles.takePhotoContainer}>
                          <Image
                            source={{ uri: photo }}
                            style={{
                              width: 200,
                              height: 200,
                            }}
                          />
                        </View>
                      )}
                      <TouchableOpacity
                        style={styles.flipContainer}
                        onPress={() => {
                          setType(
                            type === Camera.Constants.Type.back
                              ? Camera.Constants.Type.front
                              : Camera.Constants.Type.back
                          );
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 10,
                            marginBottom: 0,
                            color: "white",
                            marginRight: 10,
                          }}
                        >
                          Flip
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={takePhoto}
                      >
                        <View style={styles.buttonEdit}>
                          {/* <View style={styles.takePhotoInner}></View> */}
                          <Icon
                            name="CameraIcon"
                            fill="#FFFFFF"
                            width="24"
                            height="24"
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </Camera>
                  {/* {!image ? (
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
        )} */}
                </View>
                {/* {!image ? (
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
        )} */}

                <TextInput
                  value={namePost}
                  onChangeText={(value) => setNamePost(value)}
                  placeholder="Name of the post..."
                  placeholderTextColor="#BDBDBD"
                  style={styles.input}
                />
                <View style={styles.inputIcon}>
                  <TextInput
                    value={locationText}
                    onChangeText={(value) => setLocationText(value)}
                    placeholder="Location..."
                    placeholderTextColor="#BDBDBD"
                    style={styles.inputLoc}
                  />
                  <Icon
                    name="MapLocation"
                    fill="#BDBDBD"
                    width="15"
                    height="24"
                    style={styles.icon}
                  />
                </View>
                <TouchableOpacity
                  title={"Publish"}
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        !namePost || !locationText || !photo
                          ? "#F6F6F6"
                          : "#FF6C00",
                    },
                  ]}
                  onPress={onCreatePost}
                  // disabled={true}
                  disabled={!namePost || !locationText || !photo}
                >
                  <Text
                    style={[
                      styles.textButton,
                      {
                        color:
                          !namePost || !locationText || !photo
                            ? "#BDBDBD"
                            : "white",
                      },
                    ]}
                  >
                    Publish
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.footer}>
                <TouchableOpacity
                  onPress={() => handleClear()}
                  style={styles.buttonAdd}
                >
                  <Icon
                    name="DeleteIcon"
                    fill="#BDBDBD"
                    width="24"
                    height="24"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

