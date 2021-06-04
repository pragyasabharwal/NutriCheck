import { useEffect, useState } from "react";
import axios from "axios";
import { Footer } from "../Footer";
import Loader from "react-loader-spinner";
import { Dashboard } from "../Dashboard";
import { Quiz } from "../../types/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  const themeStored = localStorage?.getItem("theme");
  const [data, setData] = useState<Quiz[]>([]);
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

  window.onbeforeunload = null;

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
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-6xl"/>
            <span
              className={
                themeStored === "dark"
                  ? "text-white text-3xl ml-4 self-center"
                  : "text-black text-3xl ml-4 self-center"
              }
            >
              <span className="text-6xl">N</span>utri<span className="text-6xl">C</span>heck
            </span>
          </div>
          <div
            className={
              themeStored === "dark"
                ? "text-white text-xl mt-10 w-3/4 mr-auto ml-auto"
                : "text-black text-xl mt-10 w-3/4 mr-auto ml-auto"
            }
          >
          Some fun quizzes for you to keep your
          food habits in check 
          </div>
          <Dashboard data={data} />
          <Footer />
        </>
      )}
    </>
  );
};
