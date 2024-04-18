import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyABWGSm5Lc-QaP_0jUo7_TQyTkM3ZfhsYw",
  authDomain: "my-kitchen-bao.firebaseapp.com",
  projectId: "my-kitchen-bao",
  storageBucket: "my-kitchen-bao.appspot.com",
  messagingSenderId: "74387793938",
  appId: "1:74387793938:web:534c719e85a1a4e369d0cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
