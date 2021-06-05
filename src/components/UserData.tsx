import axios from "axios";
import { useEffect, useState } from "react";

export const UserData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
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
  }, []);
  return (
    <h1>
      {products.map((item) => (
        <li>{item}</li>
      ))}
    </h1>
  );
};
