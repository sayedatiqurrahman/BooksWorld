// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBljFgFln5QfQZ8qxf8FPTMvCmKHMozYF8",
  authDomain: "booksworld-4141a.firebaseapp.com",
  projectId: "booksworld-4141a",
  storageBucket: "booksworld-4141a.appspot.com",
  messagingSenderId: "656554225277",
  appId: "1:656554225277:web:f174ca85b0e00eeb888b14",
  measurementId: "G-E6YYM0NTKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app