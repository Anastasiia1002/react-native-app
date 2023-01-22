import { StyleSheet, Dimensions,StatusBar } from "react-native";

export const styles = StyleSheet.create({
    containerView: {
      flex: 1,
    },
    container: {
      backgroundColor: "#FFFFFF",
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      flexDirection: "column",
      justifyContent: "space-between",
    },
    camera: {
      flex: 1,
      height: (Dimensions.get("window").width - 32) * 0.7,
      borderRadius: 8,
    },
    photoView: {
      flex: 1,
      // height: (Dimensions.get("window").width - 32) * 0.7,
      backgroundColor: "transparent",
      // justifyContent: "flex-end",
      justifyContent: "start",
      marginTop: 20,
      position: "relative",
    },
    takePhotoContainer: {
      position: "absolute",
    },
    flipContainer: {
      flex: 0.1,
      alignSelf: "flex-end",
      marginBottom: 30,
    },
  
    button: {
      alignSelf: "center",
      // marginTop: 20,
      // paddingTop: 30,
    },
  
    // takePhotoOut: {
    //   borderWidth: 2,
    //   borderColor: "white",
    //   height: 50,
    //   width: 50,
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   borderRadius: 50,
    // },
  
    // takePhotoInner: {
    //   borderWidth: 2,
    //   borderColor: "white",
    //   height: 40,
    //   width: 40,
    //   backgroundColor: "white",
    //   borderRadius: 50,
    // },
  
    text: {
      // fontWeight: 500,
  
      fontSize: 17,
      lineHeight: 22,
  
      letterSpacing: -0.4,
  
      color: "#212121",
    },
    bodySection: {
      flex: 1,
      justifyContent: "space-between",
    },
    body: {
      flex: 1,
      maxHeight: "100%",
      paddingHorizontal: 16,
      paddingTop: 32,
      justifyContent: "flex-start",
    },
    boxImage: {
      width: "100%",
      // height:240,
      height: (Dimensions.get("window").width - 32) * 0.7,
      borderRadius: 8,
      // marginBottom:8,
      borderColor: "#E8E8E8",
      borderWidth: 1,
      backgroundColor: "#F6F6F6",
      // alignItems: "center",
      // justifyContent: "center",
    },
    addBox: {
      // position: "relative",
      // alignItems: "center",
      // justifyContent: "center",
    },
    addImage: {
      width: "100%",
  
      height: (Dimensions.get("window").width - 32) * 0.7,
      borderRadius: 8,
    },
  
    buttonPlus: {
      width: 60,
      height: 60,
      borderRadius: 100,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
    },
  
    buttonEdit: {
      position: "absolute",
      width: 60,
      height: 60,
      borderRadius: 100,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 10,
    },
    photoText: {
      // font-weight: 400;
      fontSize: 16,
      lineHeight: 19,
      color: "#BDBDBD",
  
      marginTop: 8,
      marginBottom: 32,
    },
  
    input: {
      height: 50,
      width: Dimensions.get("window").width - 32,
      borderBottomWidth: 1,
      borderBottomColor: "#E8E8E8",
      // fontWeight: 400,
      fontSize: 16,
      lineHeight: 19,
    },
    inputLoc: {
      height: 50,
      width: Dimensions.get("window").width - 32,
      borderBottomWidth: 1,
      borderBottomColor: "#E8E8E8",
      // fontWeight: 400,
      fontSize: 16,
      lineHeight: 19,
      paddingLeft: 24,
    },
    inputIcon: {
      position: "relative",
      // borderBottomWidth: 1,
      // borderBottomColor: "#E8E8E8",
      // paddingLeft: 12,
    },
    icon: {
      position: "absolute",
      top: 13,
      left: 4,
    },
    button: {
      // flex: 1,
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 16,
      width: 343,
      maxHeight: 50,
      marginTop: 27,
  
      borderRadius: 100,
    },
    textButton: {
      // fontFamily: "Roboto-Medium",
      color: "#FFFFFF",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 16,
      // lineHeight: 1.18,
    },
  
    footer: {
      paddingVertical: 10,
  
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
  
      backgroundColor: "#F6F6F6",
      borderRadius: 100,
    },
  });
  