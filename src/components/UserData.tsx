import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "src/context/AuthProvider";

export const UserData = () => {
  const [products, setProducts] = useState([]);
  const { token, login } = useAuth();

  useEffect(() => {
    (async function () {
      console.log(token, "useffect is running");
      const res = await axios.get(
        "https://backend-quiz.pragyasabharwal.repl.co/user"
      );
      console.log(res);
      try {
        if (res.status === 200) {
          console.log(res.data.products);
          setProducts(res.data.products);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [token]);

  return (
    <h1>
      {products.map((item) => (
        <li>{item}</li>
      ))}
    </h1>
  );
};
