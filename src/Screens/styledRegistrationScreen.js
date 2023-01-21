import {  StyleSheet,Dimensions} from "react-native";

export const styles = StyleSheet.create({
    containerView: {
      flex: 1,
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
      width: Dimensions.get("window").width,
    },
    boxImage: {
      flex: 1,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      top: -152,
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
    box: {
      position: "relative",
  
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 92,
      backgroundColor: "#FFFFFF",
  
      justifyContent: "flex-start",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
     height:545,
     width: Dimensions.get("window").width,
      flex: 0.7,
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    input: {
      backgroundColor: "#F6F6F6",
      width: Dimensions.get("window").width- 32,
      height: 50,
      padding: 16,
  
      borderColor: "#E8E8E8",
      marginBottom: 10,
      gap: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
    viewPassword: {
      height: "100%",
      position: "absolute",
      right: 16,
    },
    passwordText: {
      marginVertical: 15,
    },
    button: {
      // flex: 1,
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 13,
      width: Dimensions.get("window").width- 32,
      
      height: 50,
      marginTop: 27,
      // gap: 12px;
  
      // marginBottom: 113,
  
      backgroundColor: "#FF6C00",
      borderRadius: 100,
    },
    text: {
      // fontFamily: "Roboto-Medium",
      color: "#FFFFFF",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 16,
      // lineHeight: 1.18,
    },
    account: {
      marginVertical: 16,
      textAlign: "center",
      color: "#1B4371",
    },
  });