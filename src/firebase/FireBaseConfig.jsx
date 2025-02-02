// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiXxvCQh3awPDsf92anRMo_FnFSjX3X0o",
  authDomain: "e-commerce-shopping-site.firebaseapp.com",
  projectId: "e-commerce-shopping-site",
  storageBucket: "e-commerce-shopping-site.firebasestorage.app",
  messagingSenderId: "2336798190",
  appId: "1:2336798190:web:02fd9885a736f1de84caff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
