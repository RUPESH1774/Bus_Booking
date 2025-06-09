// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl70mJsk8L4HMiUb343DM6Hgk2KaKk48E",
  authDomain: "bus-login-register.firebaseapp.com",
  projectId: "bus-login-register",
  storageBucket: "bus-login-register.firebasestorage.app",
  messagingSenderId: "832912051522",
  appId: "1:832912051522:web:7b84db9e77f2dd14488cdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);