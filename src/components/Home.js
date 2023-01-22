
import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {useDispatch } from "react-redux";

import Icon from "../components/icon";
import PostsScreen from "./PostsScreen/PostsScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen/CreatePostsScreen";
import {authSingOutUser} from '../redux/auth/authOperations'

const Tabs = createBottomTabNavigator();


export default function Home({navigation}) {
  const dispatch= useDispatch()


  return (
    <Tabs.Navigator
      screenOptions={{ tabBarShowLabel: false, labeled: false }}
      backBehavior="firstRoute"
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        navigation={navigation}
        
        options={{
          headerRight: () => (
            <TouchableOpacity style={styles.iconLog} onPress={() => dispatch(authSingOutUser())}>
              <Icon name="LogOut" fill="#BDBDBD" width="24" height="24" />
            </TouchableOpacity>
          ),
          title: "Posts",
          tabBarIcon: ({ color, number, focused }) => {
            return (
              // <TouchableOpacity>
                <Icon
                  name="MenuIcon"
                  fill="rgba(33, 33, 33, 0.8)"
                  width="18"
                  height="18"
                />
              // </TouchableOpacity>
            );
          },
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        navigation={navigation}
        options={{
          
          tabBarVisible:false,
          headerLeft: () => (
            <TouchableOpacity style={styles.iconBack}>
               <Icon name="BackIcon" fill="#BDBDBD" width="24" height="24" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, number, focused }) => {
            return (
              <View style={styles.buttonAdd}>
                <Icon name="PlusPost" fill="#FFFFFF" width="14" height="14" />
               </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, number, focused }) => {
            return (
              // <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
                <Icon
                  name="UserIcon"
                  fill="rgba(33, 33, 33, 0.8)"
                  width="18"
                  height="18"
                />
              // </TouchableOpacity>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  container: {
    flex: 1,
  },
  iconLog: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  iconBack:{
   
      position: "absolute",
      bottom: 10,
      left: 10,
 
  },
  buttonAdd: {
    paddingHorizontal: 28,
    paddingVertical: 13,
    width: 70,
    height: 40,
    marginHorizontal: 42,
    // gap: 12px;

    // marginBottom: 113,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
});

// <KeyboardAvoidingView
//   behavior={Platform.OS == "ios" ? "padding" : "height"}
//   style={styles.containerView}
// >

//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>

//<ScrollView style={styles.container}>
//  <ProfileScreen/>

//  <PostsScreen/>
//<CommentsScreen/> */}
//<CreatePostsScreen/>

//</ScrollView> */}
//       </View>
//     </TouchableWithoutFeedback>

// </KeyboardAvoidingView>

//     screenOptions={({ route }) => ({
//       // tabBarActiveTintColor: "tomato",
//       // tabBarInactiveTintColor: "gray",
//       tabBarShowLabel: false,
//  labeled: false,
//       tabBarIcon: ({ focused, color, size }) => {
//         // <FontAwesome name="list-alt" size={24} color="black" />
//         let iconName;

//         if (route.name === "PostsScreen") {
//           iconName = 'list-alt'
//         } else if (route.name === "CreatePostsScreen") {
//           iconName = focused ? "ios-list-box" : "ios-list";
//         } else if (route.name === "ProfileScreen") {
//           iconName = focused ? "ios-list-box" : "ios-list";
//         }
//         return <FontAwesome name={iconName} size={size} color={color} />;
//       },
//     })}
// screenOptions={{
//   tabBarActiveTintColor: "tomato",
//   tabBarInactiveTintColor: "gray",
// }}
