import React from "react";
import img from "../images/victory.png";

const EndScreen = () => {
  return (
    <div>
      <img src={img} alt="victory" />
      <p>This is the end of the game</p>
    </div>
  );
};

export default EndScreen;
