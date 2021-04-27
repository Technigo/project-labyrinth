import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { game } from "../reducers/game";
import { nextQuestion } from '../reducers/game';

export const Question = () => {
  const userName = useSelector((store) => store.game.userName);
  const gameQuestion = useSelector((store) => store.game.question);

  const dispatch = useDispatch();

  const onNextQuestion = (direction) => {
    dispatch(nextQuestion(userName, direction));
  }

  return (
    <div>
      <h3>{gameQuestion.description}</h3>
      {/* {gameQuestion.actions.map((action, index) => (
        <div key={index}>
          <p>{action.description}</p>
          <button onClick={() => onNextQuestion(action.direction)}>click{action.direction}</button>
        </div>
      ))} */}
    </div>
  )
}
