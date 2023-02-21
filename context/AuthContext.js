import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
// import reducer from "../reducers/pages_reducer";

// import {} from "../actions";

// const initialState = {};

const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [allUsers, setAllUsers] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // const getAllUsers = async () => {
    //   try {
    //     const users = await getDocs(collection(db, "users"));
    //     setAllUsers(users.docs.map((item) => item.data()));
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getAllUsers();
    return unsubscribe;
  }, []);

  // sign up function
  async function signup(email, password, username) {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);
    //update profile
    await updateProfile(auth.currentUser, { displayName: username });
    const user = auth.currentUser;

    await setDoc(doc(db, "users", user.uid), {
      userId: user.uid,
      email,
      username,
      date: new Date().toLocaleDateString("en-GB"),
    });

    setCurrentUser({ ...user });
  }

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  //Edit profile
  async function userProfileUpdate(username, phone, address, image) {
    const auth = getAuth();
    await updateProfile(auth.currentUser, {
      displayName: username,
    });
    await updateDoc(doc(db, "users", currentUser.uid), {
      username,
      address,
      phone,
      image,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
        userProfileUpdate,
        allUsers,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook for reducing line of codes
export const useAuthContext = () => {
  return useContext(AuthContext);
};
