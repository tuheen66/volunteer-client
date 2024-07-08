/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import app from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();


const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignIn=(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleSignIn = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const userInfo = {
    user,
    setUser,
    loading,
    createUser,
    userSignIn,
    googleSignIn
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
