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

import Icon from "../components/icon";
import { db } from "../firebase/config";
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
                source={require("../../assets/BGRimage/bgLogReg.png")}
                style={styles.imageUser}
              />

              <View style={styles.userComment}>
                <Text style={styles.userCommentText}>{item.comment}</Text>
                <Text style={styles.userCommentDate}>{item.date} | 09:14</Text>
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

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "green",
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

  body: {
    flex: 1,
    // flex: 0.8,
    paddingHorizontal: 16,
    // backgroundColor: "green",
  },
  postCard: {
    paddingVertical: 32,
  },
  postImage: {
    width: "100%",
    // height:240,
    resizeMode: "cover",
    height: (Dimensions.get("window").width - 32) * 0.7,
    borderRadius: 8,
    marginBottom: 8,
  },

  postComment: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  postMyComment: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  imageUser: {
    resizeMode: "cover",
    height: 28,
    width: 28,
    borderRadius: 100,
  },
  userComment: {
    width: Dimensions.get("window").width - 76,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    borderTopLeftRadius: 0,
    padding: 16,
  },
  userMyComment: {
    width: Dimensions.get("window").width - 76,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderRadius: 6,
    borderTopRightRadius: 0,

    padding: 16,
  },
  userCommentText: {
    // fontWeight: 400,

    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
    marginBottom: 8,
  },

  userCommentDate: {
    // fontWeight: 400,

    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
  },

  footer: {
    // flex: 0.1,
    // flexDirection: "row",
    //  paddingTop: 16,
    position: "relative",
    // justifyContent: "center",
    // paddingBottom: 16,
    // backgroundColor: "green",
    alignItems: "center",
    // bottom: 0,
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: "#F6F6F6",
    width: Dimensions.get("window").width - 32,
    height: 50,
    padding: 16,
    paddingRight: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 100,
  },

  sendButton: {
    position: "absolute",
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    right: 24,
    top: 8,
    // bottom: 24,
    paddingHorizontal: 7,
    paddingVertical: 6,
    borderRadius: 100,
  },
  icon: {
    transform: [{ rotate: "90deg" }],
  },
});
