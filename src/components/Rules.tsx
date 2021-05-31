import { Link, useParams } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

export const Rules = () => {
  const themeStored = localStorage.getItem("theme");
  const { quizId } = useParams();
  const { dispatch } = useQuiz();
  return (
    <div>
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-green-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
        <span
          className={
            themeStored === "dark"
              ? "self-center text-3xl ml-2 mr-2 text-white"
              : "self-center text-3xl ml-2 mr-2 text-black"
          }
        >
          RULES
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-14 w-14 text-green-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
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
      <Link to={`/quiz/${quizId}`}>
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
