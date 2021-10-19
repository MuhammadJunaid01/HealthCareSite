import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import FirebaseAuthentication from "./../Firebase/firebaseinit/useFirebase";

FirebaseAuthentication();
const useHooks = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const GoogleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const GoogleSign = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const currentUser = result.user;
        setUser(currentUser);
        // history.push();
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        setError(errorMessage);

        const emailError = error.email;
        console.log(emailError);
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);

        // ..clg.
      });
    console.log("hello user", user);
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
  const LoginWithEmail = (e) => {
    e.preventDefault();
    if (email.length < 6) {
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const CurrentEmailLogUser = userCredential.user;
        setUser(CurrentEmailLogUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };
  return { user, GoogleSign, error, Logdout, LoginWithEmail, Email, Password };
};

export default useHooks;
