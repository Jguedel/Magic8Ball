import "./App.css";
import ball from "./8ball.js";
import React, { useState } from "react";

function App() {
  let [clicked, setClick] = useState(0);
  let [msg, setMsg] = useState("Think of a Question");
  let [color, setColor] = useState("black");
  const getRan = () => Math.floor(Math.random() * 20);
  let inp = color;
  return (
    <div className="App">
      <div
        className="msgCircle"
        style={{ backgroundColor: inp, color: "white" }}
        onClick={() => {
          if (clicked == 0) {
            setClick((clicked = 1));
            setMsg((msg = "Think of a Question"));
            setColor((color = "black"));
          } else if (clicked == 1) {
            setClick((clicked = 0));
            const ran = getRan();
            setMsg((msg = ball[ran].msg));
            setColor((color = ball[ran].color));
          }
        }}
      >
        <p>{msg}</p>
      </div>
    </div>
  );
}

export default App;
