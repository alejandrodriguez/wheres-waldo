import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChX9R1hklSSurewkB6mnpUdqFXb8aZZOI",
    authDomain: "where-s-waldo-caf43.firebaseapp.com",
    projectId: "where-s-waldo-caf43",
    storageBucket: "where-s-waldo-caf43.appspot.com",
    messagingSenderId: "542337731343",
    appId: "1:542337731343:web:3f1613338e31c9b0a24c7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);
