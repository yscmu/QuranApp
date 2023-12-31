// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6WE062vcVCmVRU-7PP5giWWhVMV8Kz9g",
  authDomain: "quranapp-ddf4e.firebaseapp.com",
  projectId: "quranapp-ddf4e",
  storageBucket: "quranapp-ddf4e.appspot.com",
  messagingSenderId: "50067952803",
  appId: "1:50067952803:web:1ebbfb3d34dd6a3f0e9b16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const db=getFirestore();
export {auth,db};