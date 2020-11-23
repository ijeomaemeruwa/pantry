import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAxpiygaES-G9sw3jnOczvJcMy8i52cSfQ",
    authDomain: "pantry-recipe-app.firebaseapp.com",
    databaseURL: "https://pantry-recipe-app.firebaseio.com",
    projectId: "pantry-recipe-app",
    storageBucket: "pantry-recipe-app.appspot.com",
    messagingSenderId: "717897658061",
    appId: "1:717897658061:web:caf17b8d997f2ce5084384",
    measurementId: "G-LHVZ9RX9XM"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
