import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

import { db } from "../config/FirebaseConfig";

export const getProfile = async (uid) => {
  //console.log(uid);
  await getDoc(doc(db, "users", uid)).then((res) => {
    //console.log(res);
    //console.log("res loaded");
    return res;
  });
};
