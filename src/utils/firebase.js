// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn6BcClD-eSa5Nfa2dwaS8um41PywAW90",
  authDomain: "netflixgpt-cab22.firebaseapp.com",
  projectId: "netflixgpt-cab22",
  storageBucket: "netflixgpt-cab22.firebasestorage.app",
  messagingSenderId: "258872291469",
  appId: "1:258872291469:web:436cbb538bae9312bcf2c4",
  measurementId: "G-F2KJR5P4JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
