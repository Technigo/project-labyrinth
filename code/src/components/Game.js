import React from "react";
import { useSelector } from "react-redux";
import DirectionButtons from "components/DirectionButtons.js";

const Game = () => {
  const question = useSelector((state) => state.gameplay.question);
  const directions = question.actions?.map((item) => item.direction);

  return (
    <>
      <h2>{question.description}</h2>
      {question.actions?.map((item, index) => {
        return (
          <p key={index}>
            You look to the {item.direction}. {item.description}
          </p>
        );
      })}
      {question.actions && <DirectionButtons directions={directions} />}
    </>
  );
};

export default Game;
