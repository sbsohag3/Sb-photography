// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpNK6oe0OftDWIo72tHgkPdYRcK2Z4a7A",
  authDomain: "wedding-photographer-services.firebaseapp.com",
  projectId: "wedding-photographer-services",
  storageBucket: "wedding-photographer-services.appspot.com",
  messagingSenderId: "420735144423",
  appId: "1:420735144423:web:60c4bc84919a3c85d72d42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;