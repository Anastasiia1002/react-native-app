import { StyleSheet, Dimensions,StatusBar } from "react-native";

export const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
    },
  
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
    },
    box: {
      paddingHorizontal: 16,
      position: "relative",
      width: "100%",
      // paddingLeft: 16,
      // paddingRight: 16,
      paddingTop: 92,
      backgroundColor: "#FFFFFF",
  
      justifyContent: "flex-start",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      position: "relative",
      flex: 0.8,
    },
    iconLog: {
      position: "absolute",
      top: 22,
      right: 16,
    },
    boxImage: {
      flex: 1,
      position: "absolute",
      // alignItems: "center",
      // justifyContent: "center",
      flexDirection: "column",
      top: -60,
      right: Dimensions.get("window").width / 2 + 50,
    },
    addBox: {
      flex: 1,
      // alignItems: "center",
      width: 120,
      height: 120,
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
      //  top: -60,
      zIndex: 10,
      left: Dimensions.get("window").width / 2 - 76,
    },
    addImage: {
      flex: 1,
      alignItems: "center",
      width: 120,
      height: 120,
      borderRadius: 16,
      zIndex: 10,
    },
  
    buttonPlus: {
      borderWidth: 1,
      borderRadius: 50,
      position: "absolute",
      zIndex: 20,
      right: -12,
      bottom: 14,
      width: 25,
      height: 25,
      borderColor: "#FF6C00",
      padding: 5,
    },
    buttonDel: {
      borderWidth: 1,
      borderRadius: 50,
      position: "absolute",
      zIndex: 20,
      right: -12,
      bottom: 14,
      width: 25,
      height: 25,
      borderColor: "#BDBDBD",
      padding: 5,
    },
  
    icon: {
      transform: [{ rotate: "45deg" }],
    },
  
    title: {
      textAlign: "center",
      marginBottom: 32,
      // fontWeight: 500,
      fontSize: 30,
      lineHeight: 35,
  
      letterSpacing: 0.01,
  
      color: "#212121",
    },
  
    image: {
      flex: 1,
      justifyContent: "center",
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
    footer: {
      flex: 0.1,
      flexDirection: "row",
      // paddingTop: 10,
      backgroundColor: "#F6F6F6",
      justifyContent: "center",
      // backgroundColor: "green",
      alignItems: "center",
    },
    buttonAdd: {
      paddingHorizontal: 23,
      paddingVertical: 8,
      width: 70,
      height: 40,
      marginHorizontal: 42,
      // gap: 12px;
  
      // marginBottom: 113,
  
      backgroundColor: "#FF6C00",
      borderRadius: 100,
    },
  });