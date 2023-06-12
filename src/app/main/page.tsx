"use client";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    console.log("button Clicked");
    axios
      .post("http://localhost:3000/api/home", { data: inputValue })
      .then((resp) => {
        console.log(inputValue)
        alert(JSON.stringify(resp.data.message));
      })
      .catch((error1) => console.log(error1, "Error received"));
  };

  const handleChange = (e:any) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />{" "}
      <button onClick={handleClick}>Button</button>
    </div>
  );
};

export default Home;
