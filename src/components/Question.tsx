import { useNavigate, useParams } from "react-router";
import { color } from "./utils/color";
import { option } from "./utils/option";
import React, { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import axios from "axios";
import Loader from "react-loader-spinner";
import { REACT_APP_BASE_URL } from "../components/utils/serverUrl"

export function Question() {
  const { state, dispatch, setSelectedAns, selectedAns } = useQuiz();
  const [clicked, setClicked] = useState(false);
  const themeStored = localStorage.getItem("theme");
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [count, setCount] = useState(30);
  const [data, setData] = useState([]);

  console.log(selectedAns);

  useEffect(() => {
    let componentMounted = true;
    (async function () {
      try {
        const resp = await axios.get(`${REACT_APP_BASE_URL}/quiz/${quizId}`);
        if (componentMounted) setData(resp.data.quiz);
      } catch (err) {
        console.log(err);
      }
    })();
    return () => {
      componentMounted = false;
    };
  }, []);

  useEffect(() => {
    state.initialQuestion === 8 && navigate(`/quiz/${quizId}/score`);
  });

  useEffect(() => {
    if (count === 0) {
      state.initialQuestion === 8
        ? navigate(`/score`, {
            replace: true,
          })
        : dispatch({ type: "skip_question", payload: 1 });
      setCount(30);
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count, dispatch, navigate, state.initialQuestion]);

  window.onbeforeunload = (e: any) => {
    e.preventDefault();
    e.returnValue = "";
  };

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
      {data.length === 0 ? (
        <div className="loader m-auto my-40 pt-40 pb-96 block w-max">
          <Loader
            type="BallTriangle"
            color={themeStored === "dark" ? "#ffffff" : "black"}
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      ) : (
        data.map(({ questions }: { questions: [] }) =>
          questions.map(
            (
              {
                _id,
                question,
                options,
                points,
                negativePoint,
              }: {
                _id: string;
                question: string;
                options: [];
                points: number;
                negativePoint: number;
              },
              index
            ) =>
              index === state.initialQuestion && (
                <>
                  <div key={_id}>
                    <div
                      className={
                        themeStored === "dark"
                          ? "text-2xl my-12 text-white lg: text-3xl"
                          : "text-2xl my-12 text-black lg: text-3xl"
                      }
                    >
                      {question}
                    </div>
                    <div className="flex flex-row flex-wrap items-center justify-center sm:flex-col md:flex-col lg:flex-col cursor-pointer">
                      {options.map(({ text, isRight, _id }, index) => (
                        <div
                          key={_id}
                          className={color(index)}
                          onClick={() => {
                            setSelectedAns((prev: string) => prev.concat(text));
                            setClicked(true);
                            setCount(30);
                            isRight
                              ? dispatch({
                                  type: "increment",
                                  payload: {
                                    points,
                                    negativePoint,
                                    questionNumber: 1,
                                  },
                                })
                              : dispatch({
                                  type: "decrement",
                                  payload: {
                                    points,
                                    negativePoint,
                                    questionNumber: 1,
                                  },
                                });
                          }}
                        >
                          {option(index)}
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-32 ml-auto mr-auto mt-12 pointer">
                    <div
                      onClick={() =>
                        dispatch({ type: "skip_question", payload: 1 })
                      }
                      className={
                        themeStored === "dark"
                          ? "text-white border-0 border-white-500 px-7 py-3 mb-52 ring-4 ring-green-400 cursor-pointer"
                          : "text-black border-0 border-black-500 px-7 py-3 mb-52 ring-4 ring-green-400 cursor-pointer"
                      }
                    >
                      Next →
                    </div>
                    <div className="h-16"></div>
                  </div>
                </>
              )
          )
        )
      )}
    </>
  );
}
