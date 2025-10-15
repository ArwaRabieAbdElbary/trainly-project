// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnCpvN8Z8uuaPscOz3bUttSEiUnQHPxHs",
  authDomain: "trainly-4f7a8.firebaseapp.com",
  projectId: "trainly-4f7a8",
  storageBucket: "trainly-4f7a8.firebasestorage.app",
  messagingSenderId: "12849548183",
  appId: "1:12849548183:web:71a320a6fb02a00a9192d2",
  measurementId: "G-H64QBVJG1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
