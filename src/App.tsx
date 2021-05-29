import "./index.css";
import "./App.css";
import { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Question } from "./components/Question";
import { Score } from "./components/Score";
import { Rules } from "./components/Rules";

function App() {
  const { setTheme, lightTheme, darkTheme } = useTheme();

  const themeStored = localStorage.getItem("theme");

  useEffect(() => {
    localStorage?.setItem("theme", themeStored ? themeStored : "dark");
  });

  function themeFunc() {
    if (themeStored === "dark") {
      localStorage?.setItem("theme", "light");
      setTheme(lightTheme);
    } else {
      localStorage?.setItem("theme", "dark");
      setTheme(darkTheme);
    }
  }

  return (
    <div
      className={themeStored === "dark" ? "App body-dark" : "App body-light"}
    >
      <div
        className="text-white cursor-pointer py-3 px-3"
        onClick={() => themeFunc()}
      >
        {themeStored === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </div>
      <Routes>
        <Route
          path="/quiz/:quizName/question/:questionId"
          element={<Question />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:quizName/score" element={<Score />} />
        <Route path="/quiz/:quizName/rules" element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
