import { Link } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Rules = ({ value }: { value: number }) => {
  const themeStored = localStorage.getItem("theme");
  const { dispatch } = useQuiz();
  return (
    <div>
      <div className="flex justify-center">
        <FontAwesomeIcon
          icon={faStar}
          className="text-green-500 text-4xl mx-2"
        />
        <span
          className={
            themeStored === "dark"
              ? "self-center text-3xl ml-2 mr-2 text-white"
              : "self-center text-3xl ml-2 mr-2 text-black"
          }
        >
          RULES
        </span>
        <FontAwesomeIcon
          icon={faStar}
          className="text-green-500 text-4xl mx-2"
        />
      </div>
      <div
        className={
          themeStored === "dark"
            ? "text-white mt-10 text-left mr-auto ml-auto w-96 flex-col text-medium ring-4 ring-green-400 p-10"
            : "text-black mt-10 text-left mr-auto ml-auto w-96 flex-col text-medium ring-4 ring-green-400 p-10"
        }
      >
        <div className="p-2">A. There are total 8 questions.</div>
        <div className="p-2">B. Each correct answer gives you 5 points.</div>
        <div className="p-2">C. Each wrong answer deducts 2 points.</div>
        <div className="p-2">
          D. It is a timed quiz. Each question can be answered within 30
          seconds.
        </div>
        <div className="p-2">
          E. Skipping a question does not affect the score.
        </div>
      </div>
      <Link to={`/quiz/${value}`}>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className={
            themeStored === "dark"
              ? "text-white border-0 border-white-500 px-7 py-3 mt-10 mb-48 ring-4 ring-green-400"
              : "text-black border-0 border-black-500 px-7 py-3 mt-10 mb-48 ring-4 ring-green-400"
          }
        >
          Get Started →
        </button>
      </Link>
    </div>
  );
};
