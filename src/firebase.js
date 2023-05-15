// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from  "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrWxQnKonXjCVZcG_OMGe9FSWMxeZusO8",
  authDomain: "harsh-portfolio-8c8b7.firebaseapp.com",
  projectId: "harsh-portfolio-8c8b7",
  storageBucket: "harsh-portfolio-8c8b7.appspot.com",
  messagingSenderId: "905720690882",
  appId: "1:905720690882:web:74c80ac42f04a009f4235b",
  measurementId: "G-DZWLTV3E18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore()
const analytics = getAnalytics(app);