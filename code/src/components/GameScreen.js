import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { questions, generateQuestion } from 'reducers/questions';

export const GameScreen = () => {
  const username = useSelector((store) => store.questions.username);
  const gameQuestion = useSelector((store) => store.questions.gameQuestion);
  console.log(gameQuestion, 'hej');

  return (
    <div>
      <h2>{username}</h2>
      <h3>Game screen {gameQuestion.description} </h3>
      {gameQuestion.actions.map((option) => (
        <div key={option.description}>
          <p>{option.description}</p>
          <button>
            {option.type}&nbsp;
            {option.direction}
          </button>
        </div>
      ))}
    </div>
  );
};
