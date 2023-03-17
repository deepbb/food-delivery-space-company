// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCONrkBxbZ5pxpFaY0ds1HVf7te_WPYlgE",
  authDomain: "new-chat-de3ae.firebaseapp.com",
  projectId: "new-chat-de3ae",
  storageBucket: "new-chat-de3ae.appspot.com",
  messagingSenderId: "1044982896180",
  appId: "1:1044982896180:web:6541e72fd4c5eede561c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const  storage = getStorage();
