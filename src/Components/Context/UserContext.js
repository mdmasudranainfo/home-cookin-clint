import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const authContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUSer] = useState({});
  const [loader, setLoader] = useState({});

  //   Register
  const Register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   login
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   update Profile
  const update = (displayName, photoURL) => {
    updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };
  //   google SingIn
  const googleSing = () => {
    return signInWithPopup(auth, provider);
  };

  //
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUSer(currentUser);
    });
    return unSubscribe();
  }, []);
  //
  const userInfo = { Login, update, user, Register, googleSing };
  return (
    <authContext.Provider value={userInfo}>
      {children}
      {/*  */}
    </authContext.Provider>
  );
};

export default UserContext;
