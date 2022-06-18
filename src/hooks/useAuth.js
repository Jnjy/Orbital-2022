import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { app, firebaseConfig, db } from "../config/FirebaseConfig";
import { getFirestore, doc, setDoc } from "@firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect, useContext, createContext } from "react";

const firebaseAuth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const authContext = createContext();

const usersRef = collection(db, "users");

const createUser = async (id, data) => {
  await setDoc(doc(db, "users", id), data);
};

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        setUser(newUser);
      })
      .catch((error) => {
        throw error;
      });
  };

  const signup = (email, password) => {
    return (
      createUserWithEmailAndPassword(firebaseAuth, email, password)
        //.then((userCredential) => {console.log(userCredential.user.uid);return userCredential;})
        //.then((userCredential) => {usersRef.doc(`${userCredential.user.uid}`).set({name: "nameplaceholder",uid: userCredential.user.uid,});console.log("Doc created");return userCredential;})
        .then((userCredential) => {
          createUser(userCredential.user.uid, { name: "nameplaceholder" });
          //DEBUG: for debugging use
          console.log(userCredential.user.uid);
          console.log("Reeturning");
          return userCredential;
        })
        .then((userCredential) => {
          //Signed in
          const newUser = userCredential.user;
          setUser(newUser);
        })
        .catch((error) => {
          throw error;
        })
    );
  };

  const signout = () => {
    return signOut(firebaseAuth)
      .then(() => {
        console.log("Sign Out Successful");
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const sendPasswordResetEmail = (email) => {
    return firebaseAuth.sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };

  const confirmPasswordReset = (code, password) => {
    return firebaseAuth.confirmPasswordReset(code, password).then(() => {
      return true;
    });
  };

  const signInWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleAuthProvider);
  };

  useEffect(() => {
    //const getUsers = async () => {
    //  const data = await getDocs(usersCollectionRef);
    //  console.log(data.docs);
    //};

    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });
    // Cleanup subscription on unmount
    //getUsers();
    return () => unsubscribe();
  }, []);
  // Return the user object and auth methods
  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
    signInWithGoogle,
  };
}
