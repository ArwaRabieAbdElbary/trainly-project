// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from 'firebase/functions';

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

// ✅ Initialize Firebase Authentication and Google Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

// ✅ Initialize Functions with region
const functions = getFunctions(app, 'us-central1');

// ✅ Exports used in your login page
export { auth, provider, db, storage, functions, app };

