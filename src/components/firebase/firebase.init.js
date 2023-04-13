// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSz1wjmpEkKJgyoZPQlxIU87UPTbmN5a0",
  authDomain: "ebooksworld-acf96.firebaseapp.com",
  projectId: "ebooksworld-acf96",
  storageBucket: "ebooksworld-acf96.appspot.com",
  messagingSenderId: "357954067578",
  appId: "1:357954067578:web:5bc8a016ebc995e7a26fc3",
  measurementId: "G-F5V406JCSY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
