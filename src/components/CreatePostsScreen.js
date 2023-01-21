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

import db from "../firebase/config";
import Icon from "./icon";

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

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  container: {
    backgroundColor: "#FFFFFF",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  camera: {
    flex: 1,
    height: (Dimensions.get("window").width - 32) * 0.7,
    borderRadius: 8,
  },
  photoView: {
    flex: 1,
    // height: (Dimensions.get("window").width - 32) * 0.7,
    backgroundColor: "transparent",
    // justifyContent: "flex-end",
    justifyContent: "start",
    marginTop: 20,
    position: "relative",
  },
  takePhotoContainer: {
    position: "absolute",
  },
  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
    marginBottom: 30,
  },

  button: {
    alignSelf: "center",
    // marginTop: 20,
    // paddingTop: 30,
  },

  // takePhotoOut: {
  //   borderWidth: 2,
  //   borderColor: "white",
  //   height: 50,
  //   width: 50,
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 50,
  // },

  // takePhotoInner: {
  //   borderWidth: 2,
  //   borderColor: "white",
  //   height: 40,
  //   width: 40,
  //   backgroundColor: "white",
  //   borderRadius: 50,
  // },

  text: {
    // fontWeight: 500,

    fontSize: 17,
    lineHeight: 22,

    letterSpacing: -0.4,

    color: "#212121",
  },
  bodySection: {
    flex: 1,
    justifyContent: "space-between",
  },
  body: {
    flex: 1,
    maxHeight: "100%",
    paddingHorizontal: 16,
    paddingTop: 32,
    justifyContent: "flex-start",
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
    // alignItems: "center",
    // justifyContent: "center",
  },
  addBox: {
    // position: "relative",
    // alignItems: "center",
    // justifyContent: "center",
  },
  addImage: {
    width: "100%",

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
    marginBottom: 32,
  },

  input: {
    height: 50,
    width: Dimensions.get("window").width - 32,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  inputLoc: {
    height: 50,
    width: Dimensions.get("window").width - 32,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    paddingLeft: 24,
  },
  inputIcon: {
    position: "relative",
    // borderBottomWidth: 1,
    // borderBottomColor: "#E8E8E8",
    // paddingLeft: 12,
  },
  icon: {
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
