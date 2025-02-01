// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "word-wave-98872.firebaseapp.com",
  projectId: "word-wave-98872",
  storageBucket: "word-wave-98872.firebasestorage.app",
  messagingSenderId: "459891676028",
  appId: "1:459891676028:web:c0df06342d5cdc5dc54af9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

