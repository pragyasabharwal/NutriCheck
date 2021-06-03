import { createContext, useContext, useEffect, useState } from "react";
import { Props, AuthContextType } from "../types/main";

const AuthContext = createContext<AuthContextType>(undefined!);

export const AuthProvider = ({ children }: Props) => {
  const [modal, setModal] = useState<boolean | undefined>();

  const loginStatus: any = localStorage?.getItem("login");

  const { isUserLoggedIn, token: savedToken } = JSON.parse(loginStatus) || {
    isUserLoggedIn: false,
    token: null,
  };

  const [login, setLogin] = useState(isUserLoggedIn);
  const [token, setToken] = useState(savedToken);
  return (
    <AuthContext.Provider
      value={{ login, setLogin, modal, setModal, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
