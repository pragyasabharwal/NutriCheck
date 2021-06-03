import { Link } from "react-router-dom";
import { useQuiz } from "src/context/QuizContext";
import { Quiz } from "../types/main";
import { motion } from "framer-motion";

export const Dashboard = ({ data }: { data: Quiz[] }) => {
  const themeStored = localStorage.getItem("theme");
  const { dispatch } = useQuiz();
  return (
    <div className="flex justify-evenly flex-wrap">
      {data.map(({ _id, quizTitle, imageUrl }, index) => (
        <Link to={`/quiz/${_id}/rules`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={_id}
            className="w-56 shadow-lg mt-10 md:w-80 mt-20"
          >
            <img
              onClick={() => {
                dispatch({ type: "reset" });
              }}
              src={imageUrl}
              alt={quizTitle}
            ></img>
            <div
              className={
                themeStored === "dark"
                  ? "text-white py-4 bg-gray-800"
                  : "text-black py-4"
              }
            >
              {quizTitle}
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};
