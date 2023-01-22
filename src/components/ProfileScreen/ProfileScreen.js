//ProfileScreen

//PostsScreen

import React, { useCallback, useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

import Icon from "../icon";
import * as ImagePicker from "expo-image-picker";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
import Post from "../Post";
import { db } from "../../firebase/config";
import { authSingOutUser } from "../../redux/auth/authOperations";
import {styles} from './styles'

export default function ProfileScreen({ navigation, route }) {
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);
  const { userId, nickName } = useSelector((state) => state.auth);

  useEffect(() => {
    getUserPosts();
  }, []);

  const getUserPosts = async () => {
    const database = getFirestore(db);
    const postsRef = collection(database, "posts");
    const filter = query(postsRef, where("userId", "==", userId));
    console.log(filter);
    onSnapshot(filter, (data) =>
      setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
    );
  };
  console.log(userPosts);


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
      source={require("../../../assets/BGRimage/bgLogReg.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.box}>
        <TouchableOpacity style={styles.iconLog} onPress={() => dispatch(authSingOutUser())}>
              <Icon name="LogOut" fill="#BDBDBD" width="24" height="24" />
            </TouchableOpacity>
          <View style={styles.boxImage}>
            {!image ? (
              <View style={styles.addBox}>
                <Pressable
                  title={"add"}
                  style={styles.buttonPlus}
                  onPress={AddPhotoHandler}
                >
                  <Icon name="PlusIcon" fill="#FF6C00" width="13" height="13" />
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
          <Text style={styles.title}> {nickName}</Text>
          <FlatList
            data={userPosts}
            keyExtractor={(item, indx) => indx.toString()}
            renderItem={({ item }) => (
              <View style={styles.postCard}>
                <Image
                  source={{ uri: item.photoUrl }}
                  style={styles.postImage}
                />
                <Text style={styles.postName}>{item.name}</Text>

                <View style={styles.postInfo}>
                  <View style={styles.postInfoItem}>
                    <Pressable
                      onPress={() =>
                        navigation.navigate("Comments", {
                          photoUrl: item.photoUrl,
                          postId: item.id,
                        })
                      }
                      // style={styles.iconLog}
                    >
                      <Icon
                        name="CommentPost"
                        fill="none"
                        stroke="#BDBDBD"
                        width="24"
                        height="24"
                      />
                    </Pressable>
                    <Text style={styles.postComments}>2</Text>
                  </View>
                  <View style={styles.postInfoItem}>
                    <Pressable
                      onPress={() => {
                        navigation.navigate("Map", { location: item.location });
                      }}

                      // style={styles.iconLog}
                    >
                      <Icon
                        name="MapLocation"
                        fill="#BDBDBD"
                        width="15"
                        height="24"
                      />
                    </Pressable>
                    <Text style={styles.postLocation}>{item.locationText}</Text>
                  </View>
                </View>
              </View>
            )}
          />
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
  );
}


