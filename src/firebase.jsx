// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOvLD-FCx42idhTCymDknCRyIbiz1vpoY",
  authDomain: "crud-007vite.firebaseapp.com",
  projectId: "crud-007vite",
  storageBucket: "crud-007vite.appspot.com",
  messagingSenderId: "377202050936",
  appId: "1:377202050936:web:7bafc3225475dcd17aea8d",
  measurementId: "G-YFLCCG5XYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);