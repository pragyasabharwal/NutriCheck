import "./index.css";
import "./App.css";
import { useEffect } from "react";
import { useTheme } from "./context/ThemeContext";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Question } from "./components/Question";
import { Score } from "./components/Score";
import { Rules } from "./components/Rules";
import { Nav } from "./components/Nav";

function App() {
  const { setTheme, darkTheme } = useTheme();

  const themeStored = localStorage.getItem("theme");

  useEffect(() => {
    themeStored === null && setTheme(darkTheme);
    localStorage?.setItem("theme", themeStored ? themeStored : "dark");
  });

  return (
    <div
      className={themeStored === "dark" ? "App body-dark" : "App body-light"}
    >
      <Nav />
      <Routes>
        <Route path="/quiz/:quizId" element={<Question />} />
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:quizId/score" element={<Score />} />
        <Route path="/quiz/:quizId/rules" element={<Rules />} />
      </Routes>
    </div>
  );
}

export default App;
