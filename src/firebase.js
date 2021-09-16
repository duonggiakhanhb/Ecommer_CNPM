import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDpnbqy4EcvyDXjxl32l2m1_XajmJ3VRLM",
    authDomain: "shopping-cart-77b68.firebaseapp.com",
    projectId: "shopping-cart-77b68",
    storageBucket: "shopping-cart-77b68.appspot.com",
    messagingSenderId: "880809289539",
    appId: "1:880809289539:web:a5e0a7cb8d9e881a1931f6",
    measurementId: "G-PWKSVF1LJZ",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
