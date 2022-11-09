import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../Firebase/Firebase.config";

export const authContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const UserContext = ({ children }) => {
  const [user, setUSer] = useState({});
  const [loader, setLoader] = useState(true);

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
  //   logOut
  const logOut = () => {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  //   google SingIn
  const googleSing = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // github SingIn
  const githubSing = () => {
    return signInWithPopup(auth, gitProvider);
  };

  //
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUSer(currentUser);
      setLoader(false);
    });
    return () => unSubscribe();
  }, []);
  //
  const userInfo = {
    Login,
    githubSing,
    logOut,
    update,
    user,
    Register,
    googleSing,
  };
  return (
    <authContext.Provider value={userInfo}>
      {children}
      {/*  */}
    </authContext.Provider>
  );
};

export default UserContext;
