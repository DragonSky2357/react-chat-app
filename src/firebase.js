import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBcXNZgiXFyjecDlvONU3IeCCZQGrglgks",
  authDomain: "react-chat-app-be2c9.firebaseapp.com",
  projectId: "react-chat-app-be2c9",
  storageBucket: "react-chat-app-be2c9.appspot.com",
  messagingSenderId: "20287084420",
  appId: "1:20287084420:web:48364ff395b8454fafafd1",
  measurementId: "G-31B6J812F5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;
