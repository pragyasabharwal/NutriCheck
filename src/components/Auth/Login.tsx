import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "src/context/AuthProvider";
import axios from "axios"

export const Login = () => {
  const themeStored = localStorage.getItem("theme");
  const { setToken, setLogin, login } = useAuth();
  const { state }: any = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL

  
  const loginUser : any = async (req: Request, res: Response) => {
    try {
      const res = await axios.post(
        `${REACT_APP_BASE_URL}/login`,
        {
          user: {
            username,
            password
          }
        }
      );
      if (res.status === 200) {
        console.log('check')
        localStorage?.setItem(
          "login",
          JSON.stringify({ isUserLoggedIn: true, token: res.data.token })
        );
        setLogin(true);
        setToken(res.data.token);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        className={
          themeStored === "dark"
            ? "text-white flex flex-col"
            : "text-black flex flex-col"
        }
      >
        <div
          className={
            themeStored === "dark"
              ? "text-3xl text-white"
              : "text-3xl text-black"
          }
        >
          Welcome back!
        </div>
        <input
          placeholder="Username"
          className="m-auto my-10 p-2 border-green-400 text-black rounded-sm"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <div className="relative">
          <input
            placeholder="Password"
            type="password"
            className="text-black m-auto m-4 p-2 rounded-sm	"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button
          className="my-10 ring ring-green-400 w-20 p-2 m-auto"
          onClick={() => {
            loginUser()
            navigate(state ? state?.from : "/");
          }}
        >
          Login
        </button>
        <span>
          Not a user yet? <Link to="/signup" className="underline cursor-pointer">Sign Up</Link>
        </span>
        <div className="h-96"></div>
      </div>
    </>
  );
};
