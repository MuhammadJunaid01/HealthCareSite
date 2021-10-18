import { initializeApp } from "firebase/app";
import firebaseConfig from "./../FirebaseConfig";

const FirebaseAuthentication = () => {
  return initializeApp(firebaseConfig);
};
export default FirebaseAuthentication;
