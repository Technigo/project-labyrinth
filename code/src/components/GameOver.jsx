import React from "react";

const GameOver = () => {
  const restart = () => {
    window.location.reload();
  };
  return (
    <>
      <button onClick={restart}>Move towards the light...</button>
    </>
  );
};

export default GameOver;
