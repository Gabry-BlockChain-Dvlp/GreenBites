// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNo-EGIKx8jXG6h_nVT0hhdxMUmx66AAE",
  authDomain: "greenbites-8ea40.firebaseapp.com",
  projectId: "greenbites-8ea40",
  storageBucket: "greenbites-8ea40.firebasestorage.app",
  messagingSenderId: "105518954359",
  appId: "1:105518954359:web:a07402b9fe80d4b8ab9372",
  measurementId: "G-8WHJ2GGSXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)

export { analytics };
