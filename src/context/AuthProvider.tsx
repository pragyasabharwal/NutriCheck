import { createContext, useContext, useEffect, useState } from "react";
import { Props, AuthContextType } from "../types/main";
import axios from "axios";

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

const AuthContext = createContext<AuthContextType>(undefined!);

function setupAuthHeaderForServiceCalls(token: string | null) {
  console.log('called again', token);
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
}

export const AuthProvider = ({ children }: Props) => {
  const [modal, setModal] = useState<boolean | undefined>();
  const [initials, setInitials] = useState<string | undefined>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [userModal, setUserModal] = useState(false)

  const loginStatus: any = localStorage?.getItem("login");

  const { isUserLoggedIn, token: savedToken } = JSON.parse(loginStatus) || {
    isUserLoggedIn: false,
    token: null,
  };

 
  const [login, setLogin] = useState(isUserLoggedIn);
  const [token, setToken] = useState(savedToken);

  token && setupAuthHeaderForServiceCalls(token);

  const loginUser: any = async (req: Request, res: Response) => {
    try {
      const res = await axios.post(`${REACT_APP_BASE_URL}/login`, {
        user: {
          username,
          password,
        },
      });
      if (res.status === 200) {
        console.log(res);
        localStorage?.setItem(
          "login",
          JSON.stringify({ isUserLoggedIn: true, token: res.data.token })
        );
        setToken(res.data.token);
        setupAuthHeaderForServiceCalls(res.data.token);
        setLogin(true);
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <AuthContext.Provider
      value={{
        login,
        setLogin,
        modal,
        setModal,
        token,
        setToken,
        initials,
        setInitials,
        setupAuthHeaderForServiceCalls,
        loginUser,
        username,
        password,
        setUsername,
        setPassword,
        userModal,
        setUserModal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
