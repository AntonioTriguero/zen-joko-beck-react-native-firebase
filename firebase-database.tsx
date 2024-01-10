// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "zen-joko-beck-pills.firebaseapp.com",
  projectId: "zen-joko-beck-pills",
  storageBucket: "zen-joko-beck-pills.appspot.com",
  messagingSenderId: "548229356919",
  appId: "1:548229356919:web:7e23b6e68f4f3aff0f1572",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
