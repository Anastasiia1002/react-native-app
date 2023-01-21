//PostsScreen

import React, { useCallback, useState } from "react";
import {
  StyleSheet,
  Pressable,
  StatusBar,
  Text,
  View,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import Icon from "./icon";

export default function Post({ navigation, route }) {
    const handlerOpenComments=() => {
      navigation.navigate("Comments")
      // { sessionId: 45, userId: "22e24" }
      
    }
    const handlerOpenLocations=() => {
      navigation.navigate("Map");
    }
    return(
        <ScrollView style={styles.body} >
        <View>
     
        
        <View style={styles.postCard}>
        <Image  source={require("../../assets/BGRimage/bgLogReg.png")} style={styles.postImage} />
        <Text style={styles.postName}>Cat</Text>

        <View style={styles.postInfo}>
        <View style={styles.postInfoItem}>
        <Pressable
          onPress={() => {
            navigation.navigate("Comments")}}
          // style={styles.iconLog}
        >
          <Icon
            name="CommentPost"
            fill="none"
            stroke='#BDBDBD'
            width="24"
            height="24"
          />
        </Pressable >
        <Text style={styles.postComments}>2</Text>
        </View>
        <View style={styles.postInfoItem}>
        <Pressable
          onPress={handlerOpenLocations}
          // style={styles.iconLog}
        >
          <Icon
            name="MapLocation"
            fill='#BDBDBD'
            width="15"
            height="24"
          />
        </Pressable>
        <Text style={styles.postLocation}>Ukraine</Text>
          </View>
          </View>

          
          
       
          
          </View>

          <View style={styles.postCard}>
        <Image  source={require("../../assets/BGRimage/bgLogReg.png")} style={styles.postImage} />
        <Text style={styles.postName}>Cat</Text>

        <View style={styles.postInfo}>
        <View style={styles.postInfoItem}>
        <Pressable
          onPress={handlerOpenComments}
          // style={styles.iconLog}
        >
          <Icon
            name="CommentPost"
            fill="none"
            stroke='#BDBDBD'
            width="24"
            height="24"
          />
        </Pressable>
        <Text style={styles.postComments}>2</Text>
        </View>
        <View style={styles.postInfoItem}>
        <Pressable
          onPress={handlerOpenLocations}
          // style={styles.iconLog}
        >
          <Icon
            name="MapLocation"
            fill='#BDBDBD'
            width="15"
            height="24"
          />
        </Pressable>
        <Text style={styles.postLocation}>Ukraine</Text>
          </View>
          </View>

          
          
       
          
          </View>


          </View>
        </ScrollView>
    )}

    const styles = StyleSheet.create({
    body: {
        flex: 1,
        // flex: 0.8,
        paddingHorizontal: 16,
        // backgroundColor: "green",
      },
      user:{
        marginVertical: 32,
    height:60,
      },
      userInfo:{
    flexDirection: 'row',
    alignItems: "center",
    
      },
      userImage:{
    width: 60,
    height: 60,
    borderRadius: 16,
    marginRight: 8,
      },
      userName:{
     // fontWeight: 700,
     fontSize: 13,
     lineHeight: 15,
      },
      userEmail:{
     // fontWeight: 400,
     fontSize: 11,
     lineHeight: 13,
      },
    
      postCard:{
    paddingBottom:32,
      },
    
      postImage:{
    width: '100%',
    // height:240,
     height: (Dimensions.get("window").width - 32)* 0.7,
    borderRadius: 8,
    marginBottom:8,
      },
    
      postName:{
    // fontWeight: 500,
    fontSize: 16,
    lineHeight: 18,
    marginBottom:8,
    color: '#212121',
      },
    
      postInfo:{
    flexDirection: 'row',
    justifyContent: "space-between",
    
      },
    postInfoItem:{
      flexDirection: 'row',
      alignItems: "center",
    },
    
      postComments:{
    // fontWeight: 400,
    marginLeft: 6,
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
      },
      postLocation:{
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
    color: '#212121',
    marginLeft: 6,
      },
    })