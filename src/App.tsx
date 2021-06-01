import "./index.css";
import "./App.css";
import { useEffect, useState } from "react";
import { useTheme } from "./context/ThemeContext";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Question } from "./components/Question";
import { Score } from "./components/Score";
import { Rules } from "./components/Rules";
import { Nav } from "./components/Nav";
import { Login } from "./components/Auth/Login";
import { PrivateRoute } from "./components/Auth/PrivateRoute";
import axios from "axios";
import { Quiz } from "./types/main"

function App() {
  const { setTheme, darkTheme } = useTheme();
  const [data, setData] = useState<Quiz[]>([]);
  const themeStored = localStorage.getItem("theme");

  useEffect(() => {
    themeStored === null && setTheme(darkTheme);
    localStorage?.setItem("theme", themeStored ? themeStored : "dark");
  }, []);

  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    let componentMounted = true;
    (async function () {
      try {
        const resp = await axios.get(`${REACT_APP_BASE_URL}/quiz`);
        if (componentMounted) {
          setData(resp.data.quizzes);
        }
      } catch (err) {
        console.log(err);
      }
    })();
    return () => {
      componentMounted = false;
    };
  }, [data]);

  return (
    <div
      className={themeStored === "dark" ? "App body-dark" : "App body-light"}
    >
      <Nav />
      <Routes>
        <Route path="/quiz/:quizId" element={<Question />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz/:quizId/score" element={<Score />} />
        {data?.map(({ _id }) => (
          <PrivateRoute path={`/quiz/${_id}/rules`} element={<Rules value = {_id}/>} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
