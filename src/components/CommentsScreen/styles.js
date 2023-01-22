import { StyleSheet, Dimensions,StatusBar } from "react-native";

export const styles = StyleSheet.create({
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