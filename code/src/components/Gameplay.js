import React from 'react';
import { useSelector } from 'react-redux';

// import { nextMove } from './reducers/game'

export const Gameplay = () => {
  const progress = useSelector((state) => state.game.progress);
  // const username = useSelector((state) => state.game.username);

  // onButtonClick = () => {
  //   console.log('onButtonClick invoked')
  //   dispatch(nextMove())
  // }
  return (
    <div>
      <p>{progress.description}</p>
    </div>
  )
}
