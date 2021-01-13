import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA6AfwgzUdUsNMgSdo0Uin_s4JFNhWh6Xs",
  authDomain: "catcyclopedia-637a3.firebaseapp.com",
  projectId: "catcyclopedia-637a3",
  storageBucket: "catcyclopedia-637a3.appspot.com",
  messagingSenderId: "427787918455",
  appId: "1:427787918455:web:aaa93d1bf96b5cd7707a72",
  measurementId: "G-84F861V4ZN",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
