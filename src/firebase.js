// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtXAGCnKW_xpQBjmyI-FTIuFpKfJnf8eA",
  authDomain: "ai--summarizer.firebaseapp.com",
  projectId: "ai--summarizer",
  storageBucket: "ai--summarizer.appspot.com",
  messagingSenderId: "151055494516",
  appId: "1:151055494516:web:fa1c5ee5aa9982c82c1021",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
