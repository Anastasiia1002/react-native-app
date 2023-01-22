//CommentsScreen

import React, { useCallback, useState, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  View,
  TextInput,
  SafeAreaView,
  StatusBar,
  Dimensions,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";
import { collection, getDocs, onSnapshot, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

import {styles} from './styles'
import Icon from "../icon";
import { db } from "../../firebase/config";
// import * as SplashScreen from "expo-splash-screen";

export default function CommentsScreen({ route }) {
  const [comment, setComment] = useState("");
  // console.log("route.params", route.params.photoUrl);
  const [allComments, setAllComments] = useState([]);
  const { postId, photoUrl } = route.params;
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    getAllPosts();
  }, []);

  const createPost = async () => {
    const database = getFirestore(db);
    await addDoc(collection(database, "posts", postId, "comments"), {
      comment,
      date: new Date().toISOString(),
      userId: userId,
    });
    setComment("");
  };

  const getAllPosts = async () => {
    const database = getFirestore(db);
    onSnapshot(collection(database, "posts", postId, "comments"), (data) =>
      setAllComments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  };
  console.log("coments", allComments)
  const editDate = (date) => {
    return data.toISOString();
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle={styles.statusBarStyle}
          // showHideTransition={statusBarTransition}
          hidden={false}
        />
        <Text style={styles.text}>Comments</Text>
        <Pressable onPress={handlerBack} style={styles.iconLog}>
          <Icon name="BackIcon" fill="#BDBDBD" width="24" height="24" />
        </Pressable>
      </View> */}

      <ScrollView style={styles.body}>
        <View style={styles.postCard}>
          <Image source={{ uri: photoUrl }} style={styles.postImage} />
        </View>
        <FlatList
          data={allComments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.postComment}>
              <Image
                source={require("../../../assets/BGRimage/bgLogReg.png")}
                style={styles.imageUser}
              />

              <View style={styles.userComment}>
                <Text style={styles.userCommentText}>{item.comment}</Text>
                <Text style={styles.userCommentDate}>{(item.date).split('T')[0]} | {((item.date).split('T')[1]).slice(0, 5)}</Text>
              </View>
            </View>
          )}
         
        />
        {/* <View style={styles.postMyComment}>
          <Image
            source={require("../../assets/BGRimage/bgLogReg.png")}
            style={styles.imageUser}
          />
          <View style={styles.userMyComment}>
            <Text style={styles.userCommentText}>
              A fast 50mm like f1.8 would help with the bokeh. I’ve been using
              primes as they tend to get a bit sharper images.
            </Text>
            <Text style={styles.userCommentDate}>09 january, 2020 | 09:14</Text>
          </View>
        </View> */}
      </ScrollView>

      <View style={styles.footer}>
        <TextInput
          value={comment}
          onChangeText={(value) => setComment(value)}
          placeholder="Comments..."
          placeholderTextColor="#BDBDBD"
          style={styles.input}
        />
        <Pressable style={styles.sendButton} onPress={createPost}>
          <Icon
            style={styles.icon}
            name="BackIcon"
            fill="#FFFFFF"
            width="20"
            height="20"
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}


