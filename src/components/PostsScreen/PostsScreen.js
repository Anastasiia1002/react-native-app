//PostsScreen

import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  StatusBar,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Dimensions,
  Image,
} from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import {styles} from './styles'

import { db } from "../../firebase/config";
import Icon from "../icon";

export default function PostsScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);
  const { userId, nickName, email } = useSelector((state) => state.auth);
  const dispatch= useDispatch()

  const handlerLogOut = () => {
    console.log("onclick");
  };
  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    const database = getFirestore(db);
    const querySnapshot = await getDocs(collection(database, "posts"));
    setPosts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS == "ios" ? "padding" : "height"}
    //   style={styles.containerView}
    // >
    //     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={{ flex:1, paddingHorizontal:16}}> */}
      <View style={styles.user}>
        <View style={styles.userInfo}>
          <Image
            source={require("../../../assets/BGRimage/bgLogReg.png")}
            style={styles.userImage}
          />
          <View>
            <Text style={styles.userName}>{nickName}</Text>
            <Text style={styles.userEmail}>{email}</Text>
          </View>
        </View>
      </View>

      {/* <Post navigation={navigation} /> */}
      {posts.length > 0 && (
        <View style={styles.body}>
          <View>
            <FlatList
              data={posts}
              keyExtractor={(_, index) => index.toString()}
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
                          navigation.navigate("Map", {
                            location: item.location,
                          });
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
                      <Text style={styles.postLocation}>
                        {item.locationText}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      )}
      {/* </ScrollView> */}
    </SafeAreaView>
    /* </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView> */
  );
}