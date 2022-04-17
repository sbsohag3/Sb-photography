// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6eBZtwbCW2DPcnwMOQ8z-xIYc2wX_z1w",
  authDomain: "wedding-photography-e44b8.firebaseapp.com",
  projectId: "wedding-photography-e44b8",
  storageBucket: "wedding-photography-e44b8.appspot.com",
  messagingSenderId: "904827364913",
  appId: "1:904827364913:web:7ad70ae70d5caf65949710",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;