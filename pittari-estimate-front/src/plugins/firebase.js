// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyDlw76UiccEtIfesdW0ZXSWHQSPb8h9u5I",
  authDomain: "pittari-estimate.firebaseapp.com",
  databaseURL: "https://pittari-estimate.firebaseio.com",
  projectId: "pittari-estimate",
  storageBucket: "pittari-estimate.appspot.com",
  messagingSenderId: "689572499147",
  appId: "1:689572499147:web:618be386a7a838ea09154e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase
