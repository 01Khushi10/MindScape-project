// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFl-vedY1TiY6P942z6vDFcqESCM7Bh5M",
  authDomain: "linkedin-clone-90a8c.firebaseapp.com",
  projectId: "linkedin-clone-90a8c",
  storageBucket: "linkedin-clone-90a8c.appspot.com",
  messagingSenderId: "1022754045634",
  appId: "1:1022754045634:web:7f04376ad1fb862ade855b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export {auth, app, firestore};

