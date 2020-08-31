import React from "react";
import ReactDOM from "react-dom";
import Click from "./Click/Click";
import "./main.scss";

const App = () => {
  return (
    <div>
      <h1>Hello Marek</h1>
      <Click />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
