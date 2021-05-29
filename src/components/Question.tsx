import { quiz } from "./data/data";
import { useTheme } from "../context/ThemeContext";
import { useNavigate, useParams } from "react-router";
import { color } from "./utils/color";
import { option } from "./utils/option";
import { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import { Link } from "react-router-dom";

// function answer(isRight: boolean, click: boolean) {
//   if (click && isRight) {
//     return { backgroundColor: "green" };
//   }
//   if (!click) return {};

//   if (click && !isRight) return { backgroundColor: "red" };
// }

export function Question() {
  const { state, dispatch } = useQuiz();
  const [click, setClicked] = useState(false);

  const themeStored = localStorage.getItem("theme");
  let { questionId, quizName } = useParams();
  let navigate = useNavigate();

  const [count, setCount] = useState(30);
  useEffect(() => {
    if (count === 0) {
      Number(questionId) === 8
        ? navigate(`/quiz/${quizName}/score`, {
            replace: true,
          })
        : navigate(`/quiz/${quizName}/question/${Number(questionId) + 1}`, {
            replace: true,
          });
      setCount(30);
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <>
      <div className="flex justify-between">
        <span
          className={
            themeStored === "dark"
              ? "text-white text-2xl ml-16"
              : "text-black text-2xl ml-16"
          }
        >
          Time: 0:{count}
        </span>
        <div
          className={
            themeStored === "dark"
              ? "text-white text-2xl mb-5 mr-20"
              : "text-black text-2xl mb-5 mr-20"
          }
        >
          Score: {state.score}
        </div>
      </div>
      {quiz.map(
        ({ quizTitle, questions }) =>
          quizTitle === quizName &&
          questions.map(
            ({ question, id, options, points, negativePoint }) =>
              id === Number(questionId) && (
                <div>
                  <div
                    className={
                      themeStored === "dark"
                        ? "text-2xl my-12 text-white lg: text-3xl"
                        : "text-2xl my-12 text-black lg: text-3xl"
                    }
                  >
                    {id}. {question}
                  </div>
                  <div className="flex flex-row flex-wrap items-center justify-center sm:flex-col md:flex-col lg:flex-col cursor-pointer">
                    {options.map(({ text, isRight }, index) => (
                      <div
                        // style={answer(isRight, click)}
                        className={color(index)}
                        onClick={() => {
                          setClicked(true);
                          setCount(30);
                          Number(questionId) === 8
                            ? navigate(`/quiz/${quizName}/score`, {
                                replace: true,
                              })
                            : navigate(
                                `/quiz/${quizName}/question/${
                                  Number(questionId) + 1
                                }`,
                                {
                                  replace: true,
                                }
                              );
                          isRight
                            ? dispatch({
                                type: "increment",
                                payload: { points, negativePoint },
                              })
                            : dispatch({
                                type: "decrement",
                                payload: { points, negativePoint },
                              });
                        }}
                      >
                        {option(index)}
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              )
          )
      )}
      <div className="w-32 ml-auto mr-auto mt-12">
        <Link
          to={
            Number(questionId) === 8
              ? `/quiz/${quizName}/score`
              : `/quiz/${quizName}/question/${Number(questionId) + 1}`
          }
        >
          <div
            onClick={() => dispatch({ type: "skip_question" })}
            className={
              themeStored === "dark"
                ? "text-white border-0 border-white-500 px-7 py-3 mb-52 ring-4 ring-white"
                : "text-black border-0 border-black-500 px-7 py-3 mb-52 ring-4 ring-black"
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
