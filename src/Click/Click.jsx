import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../main.scss";

const Click = () => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(0);

  const handleMathClick = (type, number = 1) => {
    if (type === "substraction") {
      setCount((prevState) => prevState + 1);
      setResult((prevState) => prevState - number);
    } else if (type === "reset") {
      setCount((prevState) => prevState + 1);
      setResult((prevState) => 0);
    } else if (type === "addition") {
      setCount((prevState) => prevState + 1);
      setResult((prevState) => prevState + number);
    }
  };

  return (
    <>
      <button
        onClick={() => handleMathClick("substraction", 10)}
        className="btn__click"
      >
        -10
      </button>
      <button
        onClick={() => handleMathClick("substraction")}
        className="btn__click"
      >
        -1
      </button>
      <button onClick={() => handleMathClick("reset")} className="btn__click">
        Reset
      </button>
      <button
        onClick={() => handleMathClick("addition")}
        className="btn__click"
      >
        +1
      </button>
      <button
        onClick={() => handleMathClick("addition", 10)}
        className="btn__click"
      >
        +10
      </button>
      <h2>Liczba kliknięć: {count}</h2>
      <h2>Wynik: {result}</h2>
    </>
  );
};

export default Click;
