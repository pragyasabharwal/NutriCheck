import { useAuth } from "src/context/AuthProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import { Scores } from "../../types/main";
import "./Scoreboard.css";
import Loader from "react-loader-spinner";
import { AvatarGenerator } from "random-avatar-generator";
import { REACT_APP_BASE_URL } from "../utils/serverUrl";

export const Scoreboard = () => {
  const themeStored = localStorage?.getItem("theme");
  const [scores, setScores] = useState<Scores[] | []>([]);
  const generator = new AvatarGenerator();
  const { token, login, initials } = useAuth();

  console.log("login", login, initials);

  useEffect(() => {
    (async function () {
      const res = await axios.get(`${REACT_APP_BASE_URL}/scoreboard`);
      console.log(res);
      try {
        if (res.status === 200) {
          setScores(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [token]);

  const usersWithScores = scores.filter((item) => item.score);

  const sortedUsersWithScores = usersWithScores.sort(
    (a, b) => b.score - a.score
  );

  return (
    <>
      {scores?.length === 0 ? (
        <div className="loader m-auto my-40 pt-40 pb-96 block w-max">
          <Loader
            type="BallTriangle"
            color={themeStored === "dark" ? "#ffffff" : "black"}
            height={100}
            width={100}
            timeout={4000}
          />
        </div>
      ) : (
        <>
          <span className="text-5xl uppercase text-green-400">Scoreboard</span>
          <div className="flex flex-col mt-8">
            {sortedUsersWithScores.map(({ username, score }, index) => (
              <div className=" mr-auto ml-auto rounded-xl shadow-lg flex p-2  justify-evenly bg-green-300 m-2 score-card responsive sm:w-3/5">
                <div className="p-6 text-4xl uppercase responsive-text">
                  {index + 1}
                </div>
                <img
                  alt="avatar"
                  src={generator.generateRandomAvatar()}
                  className="responsive-img sm:w-28"
                ></img>
                <div className="flex flex-col p-6">
                  <div>PLAYER</div>
                  <div className="p-6 text-lg capitalize">
                    {username.slice(0, 6)}
                  </div>
                </div>
                <div className="flex flex-col p-6">
                  <div>SCORE</div>
                  <div className="p-6 text-lg">{score}</div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
