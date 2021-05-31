import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../Footer";
import Loader from "react-loader-spinner";
import { Dashboard } from "../Dashboard";
import { Quiz } from "../../types/main";

export const Home = () => {
  const themeStored = localStorage?.getItem("theme");
  const [data, setData] = useState<Quiz[]>([]);
  const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL

  useEffect(() => {
    (async function () {
      try {
        const resp = await axios.get(
          `${REACT_APP_BASE_URL}/quiz`
        );
        setData(resp.data.quizzes);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [data]);

  return (
    <>
      {data?.length === 0 ? (
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
            We have curated some fun quizzes for you so that you can keep your
            food habits in check.
          </div>
          <Dashboard data={data} />
          <Footer />
        </>
      )}
    </>
  );
};
