// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3JZJMmxBF_54NsG_trqoFfeoInkCYWpY",
  authDomain: "netflixgpt-ad33a.firebaseapp.com",
  projectId: "netflixgpt-ad33a",
  storageBucket: "netflixgpt-ad33a.appspot.com",
  messagingSenderId: "629469884630",
  appId: "1:629469884630:web:52e6535bc4402f50481977",
  measurementId: "G-8GVYX9H0TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();