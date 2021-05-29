import { Link } from "react-router-dom";
import { useQuiz } from "src/context/QuizContext";
import { useTheme } from "src/context/ThemeContext";

export const Home = () => {
  const themeStored = localStorage.getItem("theme");

  const { dispatch } = useQuiz();
  return (
    <>
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20"
          viewBox="0 0 20 20"
          fill="green"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <span
          className={
            themeStored === "dark"
              ? "text-white text-3xl ml-4 self-center"
              : "text-black text-3xl ml-4 self-center"
          }
        >
          NutriCheck
        </span>
      </div>
      <div
        className={
          themeStored === "dark"
            ? "text-white text-xl mt-10 w-3/4 mr-auto ml-auto"
            : "text-black text-xl mt-10 w-3/4 mr-auto ml-auto"
        }
      >
        Welcome to NutriCheck! <br /> <br />
        We have curated some fun quizzes for you so that you can keep your food
        habits in check.
      </div>
      <div className="flex justify-evenly flex-wrap">
        <Link to={`/quiz/calories/rules`}>
          <div className="w-56 shadow-lg mt-10 md:w-80 mt-20">
            <img
              onClick={() => dispatch({ type: "reset" })}
              src={
                "https://images.unsplash.com/photo-1604296706014-1780746d6f57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80"
              }
              alt="calorie-quiz"
            ></img>
            <div
              className={
                themeStored === "dark"
                  ? "text-white pt-2 bg-gray-800"
                  : "text-black pt-2"
              }
            >
              Are You Keeping Your Calories Intake In Check?
            </div>
          </div>
        </Link>
        <Link to={`/quiz/vitamins/rules`}>
          <div className="w-56 shadow-lg mt-10 md:w-80 mt-20">
            <img
              onClick={() => dispatch({ type: "reset" })}
              src={
                "https://images.unsplash.com/photo-1444459094717-a39f1e3e0903?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              }
              alt="vitamin-quiz"
            ></img>
            <div
              className={
                themeStored === "dark"
                  ? "text-white pt-4 pb-4 bg-gray-800"
                  : "text-black pt-4 pb-4"
              }
            >
              Your Vitamins Miss You...
            </div>
          </div>
        </Link>
        <Link to={`/quiz/ultimate-quiz/rules`}>
          <div className="w-56 shadow-lg mt-10 md:w-80 mt-20">
            <img
              onClick={() => dispatch({ type: "reset" })}
              src={
                "https://images.unsplash.com/photo-1584559582213-787a2953dcbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80"
              }
              alt="ultimate-quiz"
            ></img>
            <div
              className={
                themeStored === "dark"
                  ? "text-white pt-4 pb-4 bg-gray-800"
                  : "text-black pt-4 pb-4"
              }
            >
              Ultimate Healthy Eating Quiz!
            </div>
          </div>
        </Link>
      </div>
      <footer className="text-white flex mr-auto ml-auto w-80 m-20 mb-20 footer mt-20">
        <div
          className={
            themeStored === "dark" ? "text-white px-2" : "text-black px-2"
          }
        >
          Made with
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mb-8"
          viewBox="0 0 20 20"
          fill="red"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>{" "}
        <div
          className={
            themeStored === "dark" ? "text-white px-2" : "text-black px-2"
          }
        >
          by Pragya Sabharwal
        </div>
      </footer>
    </>
  );
};
