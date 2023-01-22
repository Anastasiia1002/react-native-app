import { StyleSheet, Dimensions,StatusBar } from "react-native";

export const styles = StyleSheet.create({
    container: {
      // backgroundColor: "green",
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      flexDirection: "column",
      paddingHorizontal: 16,
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
  