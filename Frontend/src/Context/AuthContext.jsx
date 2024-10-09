import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

const globalAppVariables = createContext();

const AuthContext = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loginToggle, setLoginToggle] = useState(true);
  const [currentUser, setCurrentUser] = useState();
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleAlert = () => {
    if (alert.type === "default") {
      toast(alert.message);
    } else if (alert.type === "error") {
      toast.error(alert.message);
    } else if (alert.type === "warn") {
      toast.warn(alert.message);
    }
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <globalAppVariables.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
        openModal,
        setOpenModal,
        loginToggle,
        setLoginToggle,
        alert,
        setAlert,
        handleAlert,
      }}
    >
      {children}
    </globalAppVariables.Provider>
  );
};

export default AuthContext;
export const useAuth = () => {
  return useContext(globalAppVariables);
};
