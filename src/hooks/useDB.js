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

//This should return an array of community that the user has joined
export const queryCommunity = async (uid) => {
  const colRef = collection(db, "junction_user_community");
  const q = query(colRef, where("userid", "==", uid));
  const querySnapshot = await getDocs(q);
  //console.log("running qc");
  let data = [];
  querySnapshot.forEach((doc) => {
    //console.log(doc.data());
    data = [...data, doc.data().commid];
  });
  return data;
};

//cid = Community ID
export const getCommunityInfo = async (cid) => {
  const docRef = doc(db, "community", cid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    //console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

//This should return an array of items that the community have
export const queryItems = async (cid) => {
  const colRef = collection(db, "junction_community_items");
  const q = query(colRef, where("commid", "==", cid));
  const querySnapshot = await getDocs(q);
  //console.log("running qc");
  let data = [];
  querySnapshot.forEach((doc) => {
    //console.log(doc.data());
    data = [...data, doc.data().itemid];
  });
  return data;
};

//iid = Item ID
export const getItemInfo = async (iid) => {
  const docRef = doc(db, "items", iid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    //console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
