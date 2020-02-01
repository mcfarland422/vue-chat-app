import firebase from "firsbase";
import firestore from "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDzdJTIQRZ5LHt4wme5AgDuGr1K_KUvYcE",
  authDomain: "ninja-chat-6d0df.firebaseapp.com",
  databaseURL: "https://ninja-chat-6d0df.firebaseio.com",
  projectId: "ninja-chat-6d0df",
  storageBucket: "ninja-chat-6d0df.appspot.com",
  messagingSenderId: "495650962977",
  appId: "1:495650962977:web:8f6e1d05649d72aa772d60"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampInSnapshots: true });

export default firebaseApp.firestore();
