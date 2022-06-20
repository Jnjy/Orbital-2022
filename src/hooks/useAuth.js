import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { app, firebaseConfig, db } from "../config/FirebaseConfig";
import { getFirestore, doc, setDoc } from "@firebase/firestore";
import { collection, getDocs, getDoc } from "firebase/firestore";

import React, { useState, useEffect, useContext, createContext } from "react";
import { MediationTwoTone } from "@mui/icons-material";

const firebaseAuth = getAuth(app);

const googleAuthProvider = new GoogleAuthProvider();

const authContext = createContext();

const createUser = async (id, data) => {
  await setDoc(doc(db, "users", id), data);
  console.log("Creating user doc");
};

export const createUserGoogle = async (userObj) => {
  await getDoc(doc(db, "users", userObj.user.uid))
    .then((doc) => {
      if (doc.exists()) {
        console.log("Userdata exists!");
        //console.log(doc);
        console.log(userObj.user.uid);
      } else {
        console.log("doc don't exist!");
        createUser(userObj.user.uid, {
          name: userObj.user.displayName,
          email: userObj.user.email,
          creationTime: userObj.user.metadata.createdAt,
          phone: "+65 0000 0000",
        });
      }
    })
    .catch((error) => {
      console.log("Error w doc", error);
    });
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
          createUser(userCredential.user.uid, {
            name: "signupnameplaceholder",
            email: userCredential.user.email,
            creationTime: userCredential.user.metadata.createdAt,
            phone: "+65 0000 0000",
          });
          //DEBUG: for debugging use
          console.log(userCredential);
          //console.log("Returning");
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

  const sendResetEmail = (email) => {
    return sendPasswordResetEmail(firebaseAuth, email)
      .then(() => {
        console.log("useAuth: send password reset email");
      })
      .catch((error) => {
        throw error;
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
    sendResetEmail,
    confirmPasswordReset,
    signInWithGoogle,
  };
}
