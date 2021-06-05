import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
      if (res.status === 200) {
        console.log(res);
        setError(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const passCheck = () => {
    console.log('herr')

    if (password.length > 0 && confirmPW.length > 0) {
       password !== confirmPW && setError("Passwords do not match");
    }
  };

  console.log('error', error);

  return (
    <div className={themeStored === "dark" ? "text-gray-400" : "text-black"}>
      <div className="flex flex-col">
        <div className="text-3xl">Sign Up</div>
        <div className="user-input-wrp m-auto mt-6">
          <br />
          <input
            onChange={(e) => setMail(e.target.value)}
            type="text"
            className="inputText"
            required
          />
          <span className="floating-label">Email</span>
        </div>
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
        <div className="user-input-wrp m-auto mt-6">
          <br />
          <input
            onChange={(e) => setConfirmPW(e.target.value)}
            type="password"
            className="inputText"
            required
          />
          <span className="floating-label">Confirm Password</span>
        </div>
        <span className="text-red text-sm">{error}</span>
        <button
          disabled={
            password === confirmPW && password.length > 0 ? false : true
          }
          className="my-10 ring ring-green-400 w-20 p-2 m-auto"
          onClick={() => {
            signupUser()
            passCheck()
            // error.length === 0 && navigate("/login");
          }}
        >
          Sign Up
        </button>
        <div>
          {" "}
          Already have an account? <Link to="/login" className="underline">Log in</Link>
        </div>
        <div className="h-96"></div>
      </div>
    </div>
  );
};
