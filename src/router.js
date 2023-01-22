import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {TouchableOpacity,StyleSheet} from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";
import Home from "./components/Home";
import CommentsScreen from "./components/CommentsScreen/CommentsScreen";

import MapScreen from "./components/MapScreen/MapScreen";
import Icon from "./components/icon";

const MainStack = createStackNavigator();
// const SecondStack = createBottomTabNavigator();

export const useRoute =(isAuth)=>{
if(!isAuth){
  return(
  <MainStack.Navigator initialRouteName="LoginScreen"  screenOptions={{
    headerShown: false
  }}>
             <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          // options={{ headerShow: false }}
        />
   
      </MainStack.Navigator>
      )}

      return( 
      <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <MainStack.Screen name="Comments" component={CommentsScreen} />
      <MainStack.Screen name="Map" component={MapScreen}
       options={{
          
        tabBarVisible:true,
       title:"Map"
        // headerLeft: () => (
        //  <TouchableOpacity  >
        //      <Icon name="BackIcon" fill="#BDBDBD" width="24" height="24" />
        //  </TouchableOpacity>
        // ),
        }} />
    </MainStack.Navigator>
    )
}
// return (
//   <Tabs.Navigator 
//   showLabel={false}
// //   options={({ route }) => ({
// //   labeled: false ,
// //   showLabel: false})}
// //   options=
// //   {{labeled: false}}
// // screenOptions={{labeled: false}}
// // options={{
// //     tabBarLabel: 'Home',
// //     labeled: false ,}}
// // tabBarOptions: { showLabel: false }}}
// // screenOptions={() => ({
// //     tabBarShowLabel: false,
// //     labeled: false,
// // })}
// screenOptions={{
//     tabBarShowLabel: false,
//    labeled: false,
//   }}
//   >
//   <Tabs.Screen name="Posts" component={PostsScreen} 
//   options={{
//     tabBarIcon: ({ focused, color, size }) => {
//         <FontAwesome name="list-alt" size={24} color="black" />
//     }
//   }}
//   />
//   <Tabs.Screen name="Create Posts" component={CreatePostsScreen} />
//   <Tabs.Screen name="Profile" component={ProfileScreen} />
// </Tabs.Navigator>
// )

