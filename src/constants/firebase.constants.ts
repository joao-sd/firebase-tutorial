// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { appEnv } from "./env.constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: appEnv.firebase.apiKey,
  authDomain: appEnv.firebase.authDomain,
  projectId: appEnv.firebase.projectId,
  storageBucket: appEnv.firebase.storageBucket,
  messagingSenderId: appEnv.firebase.messagingSenderId,
  appId: appEnv.firebase.appId,
  measurementId: appEnv.firebase.measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);
