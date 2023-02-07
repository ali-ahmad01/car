// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI9ziReQC0uuPxR9NPLrt5-m0IplU0Rhc",
  authDomain: "car-website-18793.firebaseapp.com",
  projectId: "car-website-18793",
  storageBucket: "car-website-18793.appspot.com",
  messagingSenderId: "940332838376",
  appId: "1:940332838376:web:8267b1debb3af73f3d485d",
  measurementId: "G-4C8ZT3EB71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);