import { createContext } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const defaultAuthContext: AuthContextType = {
  isLoggedIn: true,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext(defaultAuthContext);
