import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

firebase.auth().createUserWithEmailAndPassword(email: String, password: String)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

// import firebase from "firebase/app";
// import "firebase/analytics";
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCouls6afJtqKigAUGgaXsnzI1VLu2iteA",
//   authDomain: "nuffle.firebaseapp.com",
//   projectId: "nuffle",
//   storageBucket: "nuffle.appspot.com",
//   messagingSenderId: "454376105794",
//   appId: "1:454376105794:web:ee326f241b5cba887a8adb",
//   measurementId: "G-7LCMM5B5KW"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);