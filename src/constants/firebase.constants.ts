// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMkOQUAIfsiiIUNeYCUs8TSqnvFZbPS6U",
  authDomain: "test-project-1b793.firebaseapp.com",
  projectId: "test-project-1b793",
  storageBucket: "test-project-1b793.appspot.com",
  messagingSenderId: "1001349429225",
  appId: "1:1001349429225:web:bb96c246cf7fea4b6cbd78",
  measurementId: "G-SF7SP3ZMZ3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
