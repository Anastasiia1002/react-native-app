// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
 import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJg17MO3He7UVVZY1_8vmxuOwKPo5O1Po",
  authDomain: "postsproject-ceda0.firebaseapp.com",
  projectId: "postsproject-ceda0",
  storageBucket: "postsproject-ceda0.appspot.com",
  messagingSenderId: "464408681343",
  appId: "1:464408681343:web:56fe7ffb56c0614d68184a",
  measurementId: "G-SPVWQMGQR3"
};

export const db = initializeApp(firebaseConfig);

// const auth = firebase.auth();

// export { auth };
// export default firebase;