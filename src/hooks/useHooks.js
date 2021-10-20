import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import FirebaseAuthentication from "./../Firebase/firebaseinit/useFirebase";
import { useHistory, useLocation } from "react-router";

FirebaseAuthentication();
const useHooks = () => {
  const [user, setUser] = useState({});
  const [oldUser, setOldUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [regestrationEmail, setRegestrationEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [regestrationPassword, setRegestrationPassword] = useState("");
  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const GoogleSign = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (LoggedUser) => {
      if (LoggedUser) {
        setUser(LoggedUser);
      }
    });
  }, [auth]);
  const Logdout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("you are succesfully log out");
      })
      .catch((error) => {});
  };
  const Email = (e) => {
    setEmail(e.target.value);
  };
  const Password = (e) => {
    setPassword(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const UserName = () => {
    updateProfile(auth.currentUser, { displayName: name }).then((res) => {});
  };
  const RegesterNewUser = (e) => {
    e.preventDefault();
    if (email.length < 6) {
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const CurrentEmailLogUser = userCredential.user;
        setUser(CurrentEmailLogUser);
        UserName();
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };
  const RegesEmail = (e) => {
    setRegestrationEmail(e.target.value);
  };
  const RegesPassword = (e) => {
    setRegestrationPassword(e.target.value);
  };
  const LoginEmail = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, RegesEmail, RegesPassword)
      .then((userCredential) => {
        // Signed in
        const UserPerson = userCredential.user;
        // setOldUser(UserPerson);
        console.log("usernew", UserPerson);
        console.log("kkkkkkkkkkkkkkkkkkkkkkkkkk");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return {
    user,
    GoogleSign,
    error,
    Logdout,
    RegesterNewUser,
    Email,
    RegesEmail,
    RegesPassword,
    Password,
    handleName,
    LoginEmail,
    oldUser,
  };
};

export default useHooks;
