// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth } from "firebase/auth";
import { getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx-2yEMx42bHqubw17YEQE-XXyj75zrm0",
  authDomain: "loginsignup-31448.firebaseapp.com",
  databaseURL: "https://loginsignup-31448-default-rtdb.firebaseio.com",
  projectId: "loginsignup-31448",
  storageBucket: "loginsignup-31448.appspot.com",
  messagingSenderId: "41002890860",
  appId: "1:41002890860:web:f110c5d8472f1394324a49",
  measurementId: "G-JJL0JXYGGW"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
