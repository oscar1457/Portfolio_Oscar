// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCDHQ6L1XJ9c28HF865bfBJEFQdxxUJJY",
  authDomain: "mi-web-cc1cc.firebaseapp.com",
  projectId: "mi-web-cc1cc",
  storageBucket: "mi-web-cc1cc.firebasestorage.app",
  messagingSenderId: "539003888022",
  appId: "1:539003888022:web:49e16cc318b0a6389b3db7",
  measurementId: "G-D9S4V6MEPK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);