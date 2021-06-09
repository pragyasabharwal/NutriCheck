import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { REACT_APP_BASE_URL } from "../utils/serverUrl"

export const Signup = () => {
  const themeStored = localStorage.getItem("theme");
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPW, setConfirmPW] = useState<string>("");
  const [email, setMail] = useState<string>("");
  const [error, setError] = useState("");
  const [showpw, setShowPw] = useState(false)
  const [showpw2, setShowPw2] = useState(false)

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
          <div className="relative">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showpw ? "text" : "password"}
            className="inputText"
            required
          />
          <span className="floating-label-password">Password</span>
          <FontAwesomeIcon icon={showpw ? faEyeSlash : faEye}className="cursor-pointer eye" onClick={()=>setShowPw((prev) => !prev)}></FontAwesomeIcon>
          </div>
        </div>
        <div className="user-input-wrp m-auto mt-6">
          <br />
          <div className="relative">
          <input
            onChange={(e) => setConfirmPW(e.target.value)}
            type={showpw2 ? "text" : "password"}
            className="inputText"
            required
          />
          <span className="floating-label-password">Confirm Password</span>
          <FontAwesomeIcon icon={showpw2 ? faEyeSlash : faEye}className="cursor-pointer eye" onClick={()=>setShowPw2((prev) => !prev)}></FontAwesomeIcon>
          </div>
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
            navigate("/login")
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
