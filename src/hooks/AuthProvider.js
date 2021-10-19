import { createContext, useState } from "react";
import useHooks from "./useHooks";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [storeData, setStoreData] = useState([]);
  const AllContext = useHooks();
  return (
    <AuthContext.Provider value={[AllContext, storeData, setStoreData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
