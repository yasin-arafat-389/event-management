/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";

export let authContext = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  let createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  let login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  let update = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  let logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  let authInfo = { createUser, logOut, login, update, user };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthContext;
