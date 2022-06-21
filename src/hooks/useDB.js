import {
  collection,
  getDocs,
  query,
  where,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

import { db } from "../config/FirebaseConfig";

export const getUser = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    //console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const getCommunity = async (uid) => {
  const colRef = collection(db, "junction_user_community");
  const querySnap = await getDocs(colRef);

  if (!querySnap.empty) {
    return querySnap.docs;
  } else {
    console.log("No such document!");
  }
};
