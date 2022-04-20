import React from "react";
import { useSelector, useDispatch } from "react-redux";
import gameplay, { generateNextQuestion } from "reducers/gameplay";

const Game = () => {
  const question = useSelector((state) => state.gameplay.question);
  const dispatch = useDispatch();

  const handleOnClick = (direction) => {
    dispatch(generateNextQuestion(direction));
    dispatch(gameplay.actions.setMove(direction));
  };

  return (
    <>
      <h2>{question.description}</h2>
      {question.actions?.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.description}</p>
            <button type="button" onClick={() => handleOnClick(item.direction)}>
              Go {item.direction}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Game;
