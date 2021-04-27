import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion } from '../reducers/game';
import { Loading } from './Loading';

import { StartScreen } from './StartScreen';

export const Question = () => {
  const userName = useSelector((store) => store.game.userName);
  const gameQuestion = useSelector((store) => store.game.question);
  const loading = useSelector((store) => store.ui.isLoading);

  const dispatch = useDispatch();

  const onNextQuestion = (direction) => {
    dispatch(nextQuestion(userName, direction));
  }

  let content;

  if (gameQuestion) {
    content = 
    <>
      <h3>{gameQuestion.description}</h3>
      {gameQuestion.actions.map((action, index) => (
        <div key={index}>
          <p>{action.description}</p>
          <button onClick={() => onNextQuestion(action.direction)}>GO {action.direction}</button>
        </div>
    ))} 
    </>
  } else {
    content = 
    <StartScreen />
  }
  return (
    <div> 
      {loading && <Loading /> }
      {content} 
    </div>
  )
}
