import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateNextQuestion } from "reducers/gameplay";

const Game = () => {
  const question = useSelector((state) => state.gameplay.question);
  const dispatch = useDispatch();

  return (
    <>
      <h2>{question.description}</h2>
      {question.actions?.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.description}</p>
            <button type="button" onClick={() => dispatch(generateNextQuestion(item.direction))}>
              Go {item.direction}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Game;
