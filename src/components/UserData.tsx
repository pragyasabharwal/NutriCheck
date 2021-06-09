import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "src/context/AuthProvider";

export const UserData = () => {
  const { token, setInitials } = useAuth();

  useEffect(() => {
    (async function () {
      const res = await axios.get(
        "https://backend-quiz.pragyasabharwal.repl.co/user"
      );
      console.log(res);
      try {
        if (res.status === 200) {
            console.log(res.data.username)
          setInitials(res.data.username);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <h1>
    </h1>
  );
};
