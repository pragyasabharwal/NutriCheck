import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { UserModal } from "./UserModal";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "src/context/AuthProvider";
import { REACT_APP_BASE_URL } from "../components/utils/serverUrl";

export const Nav = () => {
  const { setTheme, lightTheme, darkTheme } = useTheme();
  const themeStored = localStorage.getItem("theme");
  const {
    token,
    login,
    setLogin,
    initials,
    setInitials,
    setToken,
    setupAuthHeaderForServiceCalls,
  } = useAuth();
  const { userModal, setUserModal } = useAuth();

  function themeFunc() {
    if (themeStored === "dark") {
      localStorage?.setItem("theme", "light");
      setTheme(lightTheme);
    } else {
      localStorage?.setItem("theme", "dark");
      setTheme(darkTheme);
    }
  }

  useEffect(() => {
    (async function () {
      const res = await axios.get(`${REACT_APP_BASE_URL}/user`);
      try {
        if (res.status === 200) {
          setInitials(res.data.username);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [token]);

  return (
    <div className="flex justify-between shadow-xl mb-10 bg-green-400">
      <button className="text-black cursor-pointer py-6 px-6 flex">
        {themeStored === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            onClick={() => themeFunc()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
            onClick={() => themeFunc()}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
        <Link to="/" className="px-2">
          Home
        </Link>
      </button>
      <button className="py-6 px-6 cursor-pointer flex bg-green-400">
        {token && (
          <span
            className="mr-1"
            onClick={() => login && setUserModal(!userModal)}
          >
            Hi <span className="capitalize font-black">{initials}</span>
          </span>
        )}
        <Link to="/login">
          <span
            onClick={() => {
              localStorage.removeItem("login");
              setInitials("");
              setupAuthHeaderForServiceCalls(null);
              setLogin(false);
              setToken(null);
            }}
          >
            {!token && "Login"}
          </span>
        </Link>
        {userModal && <UserModal />}
      </button>
    </div>
  );
};
