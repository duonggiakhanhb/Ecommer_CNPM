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

const googleProvider = new firebase.auth.GoogleAuthProvider();

exports.signInWithGoogle = async () => {
    try {
        const res = await auth.signInWithPopup(googleProvider);
        const user = res.user;
        const query = await db
            .collection("users")
            .where("uid", "==", user.uid)
            .get();
        if (query.docs.length === 0) {
            await db.collection("users").add({
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

exports.signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

exports.registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password);
        const user = res.user;
        await db.collection("users").add({
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

exports.sendPasswordResetEmail = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

exports.logout = () => {
    auth.signOut();
};
