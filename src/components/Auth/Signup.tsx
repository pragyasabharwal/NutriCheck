import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const themeStored = localStorage.getItem("theme");
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPW, setConfirmPW] = useState<string>("");
  const [email, setMail] = useState<string>("");
  const [error, setError] = useState("");
  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

  const signupUser = async () => {
    try {
      const res = await axios.post(`${REACT_APP_BASE_URL}/signup`, {
        user: {
          email,
          username,
          password,
        },
      });
      if (res.status===200) {
        console.log(res);
        setError(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log(error);

  const passCheck = () => {
    if(password.length > 0 && confirmPW.length > 0){
    password !== confirmPW && setError('Passwords do not match')
  }}

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
          Sign Up
        </div>
        <input
          placeholder="Email"
          className="m-auto mt-10 p-2 border-green-400 text-black rounded-sm"
          onChange={(e) => setMail(e.target.value)}
        ></input>
        <input
          placeholder="Username"
          className="m-auto my-10 p-2 border-green-400 text-black rounded-sm"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          placeholder="Password"
          type="password"
          className="text-black m-auto m-4 p-2 rounded-sm	"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          placeholder="Confirm Password"
          type="password"
          onChange={(e) => setConfirmPW(e.target.value)}
          className="text-black m-auto mt-8 p-2 rounded-sm	"
        />
        <span className="text-red text-sm">{error}</span>
        <button
          disabled={
            password === confirmPW && password.length > 0 ? false : true
          }
          className="my-10 ring ring-green-400 w-20 p-2 m-auto"
          onClick={() => {
            signupUser();
            passCheck()
            // error.length === 0 && navigate("/login");
          }}
        >
          Sign Up
        </button>
        <div className="h-96"></div>
      </div>
    </>
  );
};
