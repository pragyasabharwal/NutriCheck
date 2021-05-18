import { useNavigate, useParams } from "react-router";
import { useQuiz } from "../context/QuizContext";
import { useTheme } from "../context/ThemeContext";

export const Score = () => {
  const { state } = useQuiz();
  let correctRatio = (state.right / 8) * 100;
  let wrongRatio = (state.wrong / 8) * 100;
  let unattemptedRatio = (state.unattempted / 8) * 100;
  const { quizName } = useParams();
  let navigate = useNavigate();
  const { dispatch } = useQuiz();
  const { theme, darkTheme } = useTheme();
  return (
    <>
      <span
        className={
          theme === darkTheme ? "text-white text-xl" : "text-black text-xl"
        }
      >
        Thanks for taking this quiz
      </span>
      <div className="mt-10 flex justify-evenly flex-col">
        <div className="mb-10">
          <div className={theme === darkTheme ? "text-white" : "text-black"}>
            Accuracy: {correctRatio}%
          </div>
          <div className="flex w-40 ml-auto mr-auto justify-center">
            <div
              style={{
                width: `${correctRatio}%`,
              }}
              className="bg-green-500 h-5"
            ></div>
            <div
              style={{
                width: `${wrongRatio + unattemptedRatio}%`,
              }}
              className="bg-red-500 h-5"
            ></div>
          </div>
        </div>
        <div className="mb-10 bg-green-300 w-40 mr-auto ml-auto p-2">
          <div>Score</div>
          <div>{state.score}/40</div>
        </div>
        <div className="m-10 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 self-start bg-green-500 ml-2 mr-2 rounded-xl"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <div>
            <div className={theme === darkTheme ? "text-white" : "text-black"}>
              Correct
            </div>
            <div className={theme === darkTheme ? "text-white" : "text-black"}>
              {state.right}
            </div>
          </div>
        </div>
        <div className="m-10 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 self-start bg-red-500 ml-2 mr-2 rounded-xl p-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div>
            <div className={theme === darkTheme ? "text-white" : "text-black"}>
              Wrong
            </div>
            <div className={theme === darkTheme ? "text-white" : "text-black"}>
              {state.wrong}
            </div>
          </div>
        </div>
        <div className="m-10 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 self-start bg-yellow-500 ml-2 mr-2 rounded-xl p-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
          <div>
            <div className={theme === darkTheme ? "text-white" : "text-black"}>
              Unattempted
            </div>
            <div className={theme === darkTheme ? "text-white" : "text-black"}>
              {state.unattempted}
            </div>
          </div>
        </div>
        <div
          className="flex ml-auto mr-auto bg-green-300 p-2 mb-24"
          onClick={() => {
            dispatch({ type: "reset" });
            navigate(`/quiz/${quizName}/question/1`);
          }}
        >
          <button className="p-0.5">Play again</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 p-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
