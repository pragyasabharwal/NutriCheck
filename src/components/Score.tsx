import { useNavigate, useParams, Link } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import axios from "axios"

export const Score = () => {
  const { state } = useQuiz();
  let correctRatio = (state.right / 8) * 100;
  let wrongRatio = (state.wrong / 8) * 100;
  let unattemptedRatio = (state.unattempted / 8) * 100;
  const { quizId } = useParams();
  let navigate = useNavigate();
  const { dispatch } = useQuiz();
  const themeStored = localStorage.getItem("theme");

  useEffect(()=>{
    (async function () {
      await axios.post(
        "https://backend-quiz.pragyasabharwal.repl.co/user", {
          score: state.score
        }
      )
    })();
  })


  return (
    <div className={themeStored === "dark" ? "text-white" : "text-black"}>
      <div className="mt-10 flex justify-evenly place-content-center flex-col">
        <div className="mb-10">
          <div>Accuracy: {correctRatio}%</div>
          <div className="flex w-96 ml-auto mr-auto justify-center">
            <div
              style={{
                width: `${correctRatio}%`,
              }}
              className="bg-green-500 h-5 rounded-l-md"
            ></div>
            <div
              style={{
                width: `${wrongRatio + unattemptedRatio}%`,
              }}
              className="bg-red-500 h-5 rounded-r-md"
            ></div>
          </div>
        </div>
        <div className="mb-10 bg-white-800 w-40 mr-auto ml-auto p-2 flex justify-between">
          <div>
            <div className="text-sm pb-2 text-gray-400">Score</div>
            <div className="font-extrabold">{state.score}/40</div>
          </div>
          <FontAwesomeIcon
            icon={faCoins}
            className="text-yellow-500 opacity-60 text-5xl self-center"
          />
        </div>
        <span className="text-2xl">Performance Stats</span>
        <div className="flex justify-center m-10 flex-wrap">
          <div className="mb-10 w-40 mr-2 p-2 flex">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="text-5xl self-center text-green-500 ml-2 mr-2 rounded-xl opacity-60"
            />
            <div>
              <div className="text-4xl">{state.right}</div>
              <div className="text-gray-400 text-sm">Correct</div>
            </div>
          </div>
          <div className="mb-10 mr-2 w-40 p-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-13 self-center bg-red-500 ml-2 mr-2 rounded-3xl p-0.5 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <div>
              <div className="text-4xl">{state.wrong}</div>
              <div className="text-gray-400 text-sm">Wrong</div>
            </div>
          </div>
          <div className="w-40 p-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-13 bg-yellow-500 rounded-3xl m-0.5 p-0.5 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
            <div>
              <div className="text-4xl">{state.unattempted}</div>
              <div className="text-gray-400 text-sm">Unattempted</div>
            </div>
          </div>
        </div>
        <div className="flex m-auto flex-col">
          <div
            className="flex w-48 py-2 place-content-center p-2 hover:bg-blue-700 hover:text-white cursor-pointer ring-4 ring-blue-400 "
            onClick={() => {
              dispatch({ type: "reset" });
              navigate(`/quiz/${quizId}`, { replace: true });
            }}
          >
            <button>Play again</button>
          </div>
          <div
            onClick={() => {
              navigate(`/`, { replace: true });
              dispatch({ type: "reset" });
            }}
            className="flex w-48 py-2 my-8 place-content-center p-2 hover:bg-blue-700 hover:text-white cursor-pointer ring-4 ring-blue-400"
          >
            <button>Go home</button>
          </div>
          <div className="flex w-48 py-2 place-content-center p-2 mb-24 hover:bg-blue-700 hover:text-white cursor-pointer ring-4 ring-blue-400 ">
            <Link to={`/quiz/${quizId}/answers`}><button>View Answers</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
