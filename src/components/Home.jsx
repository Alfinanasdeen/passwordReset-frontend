import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Home() {
  const [suc, setSuc] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/Home")
      .then((res) => {
        if (res.data === "success") {
          setSuc("Successful");
        } else {
          navigate("/Home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate]);

  return (
    <div>
      <h2>Home</h2>
      <p>{suc}</p>
    </div>
  );
}

export default Home;
