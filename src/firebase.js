// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOvLD-FCx42idhTCymDknCRyIbiz1vpoY",
  authDomain: "crud-007vite.firebaseapp.com",
  projectId: "crud-007vite",
  storageBucket: "crud-007vite.appspot.com",
  messagingSenderId: "377202050936",
  appId: "1:377202050936:web:7bafc3225475dcd17aea8d",
  measurementId: "G-YFLCCG5XYE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Firestore instance
export const auth = getAuth(app); // Auth instance