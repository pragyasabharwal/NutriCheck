import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import { useQuiz } from "../context/QuizContext";
import axios from "axios";
import Loader from "react-loader-spinner";
import { REACT_APP_BASE_URL } from "../components/utils/serverUrl";

export const Answers = () => {
  const { selectedAns, state } = useQuiz();
  const themeStored = localStorage.getItem("theme");
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(()=>{
      if(state.initialQuestion===8){
          return;
      }
      navigate('/')
  })

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

  const markedAndCorrectOption = (text: string, isRight: boolean) => {
    if (isRight) {
        return "bg-green-500 text-white p-2 py-4 w-3/5 m-2";
    }
    if (selectedAns.includes(text) && isRight) {
      return "bg-green-500 text-white p-2 py-4 w-3/5 m-2";
    }
    if (!selectedAns.includes(text)) {
      return "bg-yellow-500 text-white p-2 py-4 w-3/5 m-2";
    }
    if (!isRight) {
      return "bg-red-500 text-white p-2 py-4 w-3/5 m-2";
    }
  };

  return (
    <>
      {data?.length === 0 ? (
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
        data?.map(({ questions }: { questions: [] }) =>
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
            ) => (
              <div key={_id}>
                <div
                  className={
                    themeStored === "dark"
                      ? "text-xl my-12 text-white"
                      : "text-xl my-12 text-black"
                  }
                >
                  Q.{index + 1} {question}
                </div>
                <div className="flex flex-row flex-wrap items-center justify-center sm:flex-col md:flex-col lg:flex-col">
                  {options.map(({ text, isRight, _id }, index) => (
                    <div
                      key={_id}
                      className={markedAndCorrectOption(text, isRight)}
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            )
          )
        )
      )}
      <div className="p-4"></div>
    </>
  );
};
