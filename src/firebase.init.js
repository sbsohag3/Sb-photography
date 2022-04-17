// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp1YWhzp0oA0psxt91Pmmun5c7N_D068U",
  authDomain: "wedding-photographer-51f65.firebaseapp.com",
  projectId: "wedding-photographer-51f65",
  storageBucket: "wedding-photographer-51f65.appspot.com",
  messagingSenderId: "98420887269",
  appId: "1:98420887269:web:a019d504c7b0147a62ce0c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
