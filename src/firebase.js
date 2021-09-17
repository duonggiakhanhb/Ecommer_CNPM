import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    setDoc,
    getDoc,
} from "firebase/firestore";
import { FlashMessage } from "./components";
const firebaseApp = {
    apiKey: "AIzaSyDpnbqy4EcvyDXjxl32l2m1_XajmJ3VRLM",
    authDomain: "shopping-cart-77b68.firebaseapp.com",
    projectId: "shopping-cart-77b68",
    storageBucket: "shopping-cart-77b68.appspot.com",
    messagingSenderId: "880809289539",
    appId: "1:880809289539:web:a5e0a7cb8d9e881a1931f6",
    measurementId: "G-PWKSVF1LJZ",
};

const app = initializeApp(firebaseApp);
const auth = getAuth();
const db = getFirestore();

const sendPasswordResetEmail = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    auth.signOut();
};

export {
    auth,
    db,
    getDoc,
    doc,
    setDoc,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    logout,
};
