import { useAuth } from "../context/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

export const UserModal = () => {
  const {
    setLogin,
    setInitials,
    setToken,
    setupAuthHeaderForServiceCalls,
    setUserModal,
  } = useAuth();

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-white flex flex-col absolute top-14 right-1 p-2 rounded-md shadow-lg"
    >
      <span
        className="bg-gray-100 p-2 px-4 m-1"
        onClick={() => setUserModal(false)}
      >
        Account
      </span>
      <Link
        to="/scoreboard"
        onClick={() => setUserModal(false)}
        className="bg-gray-100 p-2 px-4 m-1"
      >
        Scores
      </Link>
      <span
        className="bg-gray-100 p-2 px-4 m-1"
        onClick={() => {
          localStorage.removeItem("login");
          setInitials("");
          setupAuthHeaderForServiceCalls(null);
          setLogin(false);
          setToken(null);
          navigate("/login");
          setUserModal(false);
        }}
      >
        Logout
      </span>
    </motion.div>
  );
};
