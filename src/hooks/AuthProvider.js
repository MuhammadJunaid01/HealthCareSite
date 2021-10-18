import { createContext } from "react";
import useHooks from "./useHooks";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const AllContext = useHooks();
  return (
    <AuthContext.Provider value={AllContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
