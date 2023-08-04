import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
