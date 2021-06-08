import { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "src/context/AuthProvider";
import axios from "axios";
import "./Login.css";

export const Login = () => {
  const themeStored = localStorage.getItem("theme");
  const { loginUser, token, setUsername, setPassword } = useAuth();
  const { state }: any = useLocation();
  const navigate = useNavigate();
  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

  return (
    <div className={themeStored === "dark" ? "text-gray-400" : "text-black"}>
      <div className="flex flex-col">
        <div className="text-3xl ">Welcome back!</div>
        <div className="user-input-wrp m-auto mt-6">
          <br />
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="inputText"
            required
          />
          <span className="floating-label">Username</span>
        </div>
        <div className="user-input-wrp m-auto mt-6">
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="inputText"
            required
          />
          <span className="floating-label">Password</span>
        </div>
        <button
          className="my-10 ring ring-green-400 w-20 p-2 m-auto"
          onClick={() => {
            loginUser();
            navigate(state ? state?.from : "/");
          }}
        >
          Login
        </button>
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
