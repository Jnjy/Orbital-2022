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
  setDoc,
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

  let data = [];

  querySnapshot.forEach((doc) => {
    data = [...data, doc.data().commid];
  });
  return data;
};

//cid = Community ID
export const getCommunityInfo = async (cid) => {
  const docRef = doc(db, "community", cid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let data = docSnap.data();
    //console.log(typeof data);
    //data = [...data, { cid: cid }];
    return data;
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
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const addCommunity = async (data) => {
  const colRef = collection(db, "community");
  const docRef = await addDoc(colRef, data);
  console.log(docRef);
  return docRef;
};

export const linkUserCommunity = async (uid, cid) => {
  const docRef = doc(db, "junction_user_community", uid + "_" + cid);
  const docSnap = await setDoc(docRef, { commid: cid, userid: uid });
  console.log(docSnap);
  return docSnap;
};

export const addItem = async (data) => {
  const colRef = collection(db, "items");
  const docRef = await addDoc(colRef, data);
  console.log(docRef);
  return docRef;
};

export const linkCommunityItem = async (cid, iid) => {
  const docRef = doc(db, "junction_community_items", cid + "_" + iid);
  const docSnap = await setDoc(docRef, { commid: cid, itemid: iid });
  console.log(docSnap);
  return docSnap;
};

export const getAllCommunity = async () => {
  const colRef = collection(db, "community");
  const querySnapshot = await getDocs(colRef);

  let data = [];

  querySnapshot.forEach((doc) => {
    //console.log(doc.id, " => ", doc.data());
    //console.log(doc);
    data = [...data, doc.id];
  });
  //console.log(data);
  return data;
};

export const updateImgRef = async (col, id, info) => {
  const docRef = doc(db, col, id);
  const updateFn = await updateDoc(docRef, info);
  return updateFn;
};

export const updateProfile = async (col, id, info) => {
  const docRef = doc(db, col, id);
  const updateFn = await updateDoc(docRef, info);
  return updateFn;
};

//This should return an array of items that the user listed
export const getAllUserItem = async (uid) => {
  const colRef = collection(db, "items");
  const q = query(colRef, where("ownerID", "==", uid));
  const querySnapshot = await getDocs(q);

  let data = [];

  querySnapshot.forEach((doc) => {
    //console.log(doc.data());
    data = [...data, doc];
  });
  return data;
};
