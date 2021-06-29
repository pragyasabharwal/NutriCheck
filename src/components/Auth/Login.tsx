import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "src/context/AuthProvider";
import "./Login.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Login = () => {
  const themeStored = localStorage.getItem("theme");
  const { loginUser, setUsername, setPassword, username, password } = useAuth();
  const { state }: any = useLocation();
  const navigate = useNavigate();
  const [showpw, setShowPw] = useState(false);

  return (
    <div className={themeStored === "dark" ? "text-gray-400" : "text-black"}>
      <div className="flex flex-col">
        <div className="text-3xl">Welcome back!</div>
        <form>
          <div className="user-input-wrp m-auto mt-6">
            <br />
            <input
              required
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              className="inputText"
            />
            <span className="floating-label">Username</span>
          </div>
          <div className="user-input-wrp m-auto mt-6">
            <br />
            <div className="relative">
              <input
                minLength = {6}
                onChange={(e) => setPassword(e.target.value)}
                type={showpw ? "text" : "password"}
                className="inputText"
                required
              />
              <span className="floating-label-password">Password</span>
              <FontAwesomeIcon
                icon={showpw ? faEyeSlash : faEye}
                className="cursor-pointer eye"
                onClick={() => setShowPw((prev) => !prev)}
              ></FontAwesomeIcon>
            </div>
          </div>
          <button
            // type="submit"
            className="my-10 ring ring-green-400 w-20 p-2 m-auto"
            onClick={() => {
              loginUser();
              username!.length > 0  && password!.length > 5 && navigate(state ? state?.from : "/");
            }}
          >
            Login
          </button>
        </form>
        <span>
          Don't have an account?{" "}
          <Link to="/signup" className="underline cursor-pointer">
            Sign Up
          </Link>
        </span>
        <div className="h-96"></div>
      </div>
    </div>
  );
};
