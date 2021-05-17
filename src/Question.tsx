import { quiz } from "./data/data";
import { useTheme } from "./context/ThemeContext";
import { useParams } from "react-router";
import { color } from "./utils/color";
import { option } from "./utils/option";
import { useReducer, useState } from "react";
import { useQuiz } from "./context/QuizContext";
import { Link } from "react-router-dom";

export function Question() {
  const { dispatch } = useQuiz();
  const [click, setClicked] = useState(false);

  const { theme, darkTheme } = useTheme();
  let { questionId } = useParams();
  return (
    <>
      {quiz.questions.map(
        ({ question, id, options }) =>
          id === Number(questionId) && (
            <div>
              <div
                className={
                  theme === darkTheme
                    ? "text-2xl my-12 text-white lg: text-3xl"
                    : "text-2xl my-12 text-black lg: text-3xl"
                }
              >
                {question}
              </div>
              <div className="flex flex-row flex-wrap items-center justify-center sm:flex-col md:flex-col lg:flex-col cursor-pointer">
                {options.map(({ text, isRight }, index) => (
                  <div
                    className={color(index)}
                    onClick={() => {
                      setClicked(true);
                      isRight
                        ? dispatch({ type: "increment" })
                        : dispatch({ type: "decrement" });
                    }}
                  >
                    {option(index)}
                    {text}
                  </div>
                ))}
              </div>
            </div>
          )
      )}
      <div className="w-32 ml-auto mr-auto mt-12">
        <Link to={`/question/${Number(questionId) + 1}`}>
          <div
            className={
              theme === darkTheme
                ? "text-white border-0 border-white-500 px-7 py-3 mb-10 ring-4 ring-white"
                : "text-black border-0 border-black-500 px-7 py-3 mb-10 ring-4 ring-black"
            }
          >
            Next →
          </div>
        </Link>
        <div className="h-10"></div>
      </div>
    </>
  );
}
