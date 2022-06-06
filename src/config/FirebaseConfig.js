import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA51xTa_HDa6q1gUUygM6jbChTCBRn8idM",
    authDomain: "orbital-2022-95df4.firebaseapp.com",
    projectId: "orbital-2022-95df4",
    storageBucket: "orbital-2022-95df4.appspot.com",
    messagingSenderId: "461288548077",
    appId: "1:461288548077:web:84d86d9266a8cc1d958ee4",
    measurementId: "G-T3LN0X7G8E"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);