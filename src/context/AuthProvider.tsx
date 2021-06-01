import { createContext, useContext, useEffect, useState } from "react";
import { Props, AuthContextType } from "../types/main";

const AuthContext = createContext<AuthContextType>(undefined!);

export const AuthProvider = ({ children }: Props) => {
  const [login, setLogin] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean | undefined>();

  useEffect(() => {
    const loggedIn = localStorage?.getItem("login");
    loggedIn && setLogin(true);
  }, []);

  const loginUserWithCredentials = (
    username: string | undefined,
    password: string | undefined
  ) => {
    if (username === "pragya@gmail.com" && password === "pragya") {
      setLogin(true);
      localStorage?.setItem("login", JSON.stringify(true));
    } else {
      setLogin(false);
      localStorage?.removeItem("login");
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, setLogin, loginUserWithCredentials, modal, setModal }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
