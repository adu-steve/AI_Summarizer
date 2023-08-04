import { useContext, createContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const AuthContext = createContext({
  currentUser: null,
  signInWithGoogle: () => Promise,
  auth: () => Promise,
});
export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const value = {
    currentUser,
    signInWithGoogle,
    auth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
