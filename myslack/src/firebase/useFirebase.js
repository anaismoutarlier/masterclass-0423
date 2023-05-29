import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { firebaseConfig } from "./config";

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [auth, setAuth] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    setAuth(getAuth(app));
  }, []);

  useEffect(() => {
    if (auth) {
      auth.onAuthStateChanged(data => {
		console.log(data);
        setUser(data);
      });
    }
  }, [auth]);

  const login = async () => await signInWithPopup(auth, googleProvider);

  const logout = async () => await signOut(auth);

  return {
	user,
	auth: {
		login,
		logout,
	},
  };
};

export default useFirebase;
export { useFirebase };
