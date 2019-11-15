import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import DirectionList from "./DirectionList";

function App() {
  const directions = ["Растениеводство", "Животноводство", "Наука и инновации"];
  return (
    <div className="App">
      <DirectionList directions={directions} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
