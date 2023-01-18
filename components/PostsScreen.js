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
import Icon from "./icon";
import Post from "./Post";




export default function PostsScreen({ navigation, route }) {
  const [posts, setPosts] = useState([]);

  const handlerLogOut = () => {
    console.log("onclick");
  };
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  console.log("posts", posts);

  const handlerOpenComments = () => {
    navigation.navigate("Comments");
    // { sessionId: 45, userId: "22e24" }
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
      <Image  source={require("../assets/BGRimage/bgLogReg.png")} style={styles.userImage} />
      <View >
      <Text style={styles.userName}>Natali Romanova</Text>
      <Text style={styles.userEmail}>email@example.com</Text>
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
              renderItem={({item} ) => (
                <View style={styles.postCard}>
                  
                  <Image
                    source={{ uri: item.photo }}
                    style={styles.postImage}
                  />
                  <Text style={styles.postName}>{item.name}</Text>
              
                  <View style={styles.postInfo}>
                    <View style={styles.postInfoItem}>
                      <Pressable
                        onPress={handlerOpenComments}
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
                          navigation.navigate("Map", {location: item.location})}}
                        
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
      )}
      {/* </ScrollView> */}
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
    paddingHorizontal:16,
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

  user: {
    marginVertical: 32,
    marginHorizontal: 16,
    height: 60,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userName: {
    // fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
  },
  userEmail: {
    // fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
  },
  body: {
    flex: 1,
  },
  user: {
    marginVertical: 32,
    height: 60,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
  },
  userName: {
    // fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
  },
  userEmail: {
    // fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
  },

  postCard: {
    paddingBottom: 32,
  },

  postImage: {
    width: "100%",
    // height:240,
    height: (Dimensions.get("window").width - 32) * 0.7,
    borderRadius: 8,
    marginBottom: 8,
  },

  postName: {
    // fontWeight: 500,
    fontSize: 16,
    lineHeight: 18,
    marginBottom: 8,
    color: "#212121",
  },

  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  postInfoItem: {
    flexDirection: "row",
    alignItems: "center",
  },

  postComments: {
    // fontWeight: 400,
    marginLeft: 6,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  postLocation: {
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
    color: "#212121",
    marginLeft: 6,
  },
  // footer: {
  //   flex: 0.1,
  //   flexDirection: "row",
  //   // paddingTop: 10,

  //   justifyContent: "center",
  //   // backgroundColor: "green",
  //   alignItems: "center",
  // },
  // buttonAdd: {
  //   paddingHorizontal: 28,
  //   paddingVertical: 13,
  //   width: 70,
  //   height: 40,
  //   marginHorizontal: 42,
  //   // gap: 12px;

  //   // marginBottom: 113,

  //   backgroundColor: "#FF6C00",
  //   borderRadius: 100,
  // },
});
