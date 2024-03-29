import "./index.css";
import "./App.css";
import { useEffect, useState } from "react";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Question } from "./components/Question";
import { Score } from "./components/Score";
import { Rules } from "./components/Rules";
import { Nav } from "./components/Nav";
import { Login } from "./components/Auth/Login";
import { PrivateRoute } from "./components/Auth/PrivateRoute";
import axios from "axios";
import { Quiz } from "./types/main";
import { Signup } from "./components/Auth/Signup";
import { useTheme } from "./context/ThemeContext";
import { useAuth } from "./context/AuthProvider";
import { Scoreboard } from "./components/Scoreboard/Scoreboard";
import { Answers } from "./components/Answers";
import { REACT_APP_BASE_URL } from "./components/utils/serverUrl"

function App() {
  const [data, setData] = useState<Quiz[]>([]);
  const themeStored = localStorage.getItem("theme");
  const { darkTheme, setTheme } = useTheme();

  const getData = () => {
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
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    themeStored === null && setTheme(darkTheme);
    localStorage?.setItem("theme", themeStored ? themeStored : "dark");
  }, []);

  return (
    <div
      className={themeStored === "dark" ? "App body-dark" : "App body-light"}
    >
      <Nav />
      <Routes>
        <Route path="/scoreboard" element={<Scoreboard />} />
        <PrivateRoute path="/quiz/:quizId" element={<Question />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <PrivateRoute path="/quiz/:quizId/score" element={<Score />} />
        <PrivateRoute path="/quiz/:quizId/answers" element={<Answers />} />
        {data?.map(({ _id }) => (
          <PrivateRoute
            path={`/quiz/${_id}/rules`}
            element={<Rules value={_id} />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
