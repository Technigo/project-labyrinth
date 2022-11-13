/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { gameAction } from 'reducers/game';
// eslint-disable-next-line import/no-cycle
import StartScreen from './StartScreen';
import Summary from './Summary';

const TheLabyrinth = () => {
  const dispatch = useDispatch();
  const name = useSelector((store) => store.game.username);
  const x = useSelector((store) => store.game.description) // the next path
  console.log(x)
  const isCompleted = useSelector((store) => store.game.isCompleted) // completed actions

  const setNext = (item) => {
    dispatch(gameAction(item))
  }
  // const data = useSelector((store) => store.game.location);

  return (
    <div>
      <p>Welcome aboard {name}</p>
      <h1>DIRECTION:</h1>
      <p>{x.description}</p>
      {isCompleted ? (<Summary />)
        : (x && x.actions.map((item) => <>
          <p>{item.description}</p>
          <button type="button" onClick={() => setNext(item)}>NAVIGATE {item.direction}</button>
        </>))}
    </div>
  )
}

export default TheLabyrinth