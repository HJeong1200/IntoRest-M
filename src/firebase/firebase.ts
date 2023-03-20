// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_ZpiNSD3icqqjphcIsXaWxJrGlEsMNn0",
  authDomain: "intorestm.firebaseapp.com",
  projectId: "intorestm",
  storageBucket: "intorestm.appspot.com",
  messagingSenderId: "878471770981",
  appId: "1:878471770981:web:5d06d8739abadbf0a7678c",
  measurementId: "G-D946XVWD66",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
