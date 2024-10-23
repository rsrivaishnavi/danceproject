import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
//import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCeab_NLk0wZj9-xcuGddGkJb9Q1to_cX8",
  authDomain: "fir-demo-22207.firebaseapp.com",
  projectId: "fir-demo-22207",
  storageBucket: "fir-demo-22207.appspot.com",
  messagingSenderId: "364076057733",
  appId: "1:364076057733:web:af8a6aec8d97f9cbfbd5ec",
  measurementId: "G-M4SR2ZHZP1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth =getAuth(app);
export const googleProvider=new GoogleAuthProvider();
//export const db = getFirestore(app);