import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAJ8yCF9nMmvTPB0tn1Baw24GWkGS6m7WI",
  authDomain: "markdown-editor-f1ed3.firebaseapp.com",
  projectId: "markdown-editor-f1ed3",
  storageBucket: "markdown-editor-f1ed3.appspot.com",
  messagingSenderId: "235415873638",
  appId: "1:235415873638:web:e21cb3ac95956880e525a7",
  measurementId: "G-716JZJJ6QB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
