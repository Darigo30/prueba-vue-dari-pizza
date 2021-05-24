// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDtWD7T_jkypJfm0HzDkZ7YDyLFE20edJ0",
    authDomain: "pizzeria-37b52.firebaseapp.com",
    projectId: "pizzeria-37b52",
    storageBucket: "pizzeria-37b52.appspot.com",
    messagingSenderId: "965355399653",
    appId: "1:965355399653:web:ba0bb2b3e531f99c7ce70c",
    measurementId: "G-8N9HY3NJ7J"
  };
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  export { firebaseConfig , db }