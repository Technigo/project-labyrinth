import React from "react";
import { useSelector } from "react-redux";

const Game = () => {
  const question = useSelector((state) => state.gameplay.question);

  return (
    <>
      {question.actions?.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.description}</p>
            <button type="button">Go {item.direction}</button>
          </div>
        );
      })}
    </>
  );
};

export default Game;
