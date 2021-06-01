import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "src/context/AuthProvider";

export const Login = () => {
  const themeStored = localStorage.getItem("theme");
  const { loginUserWithCredentials, login, modal, setModal } = useAuth();
  const { state }: any = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()

  console.log(login)

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
          themeStored === "dark" ? "text-3xl text-white" : "text-3xl text-black"
        }
      >
        Welcome back!
      </div>
      <input
        placeholder="Email"
        className="m-auto my-10 p-2 border-green-400 text-black"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input placeholder="Password" type="password"  className=" m-auto m-4 p-2" onChange={(e) => setPassword(e.target.value)}></input>
      <button
        className="my-10 ring ring-green-400 w-20 p-2 m-auto"
        onClick={() => {
          loginUserWithCredentials(username, password)
          navigate(state ? state?.from : "/");
        }}
      >
        Login
      </button>
      <div className="h-96"></div>
    </div>
    </>
  );
};
