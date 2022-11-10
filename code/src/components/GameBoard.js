import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nextStage } from 'reducers/labyrinth';

const GameBoard = () => {
  const { description, actions } = useSelector((store) => store.labyrinth.stage)
  console.log('description', description) // Radera sedan
  console.log('actions', actions) // Radera sedan
  const dispatch = useDispatch()
  const userName = useSelector((store) => store.labyrinth.username);

  const onNextAction = (type, direction) => {
    dispatch(nextStage(type, direction));
  }

  return (
    <>
      <div>Player {userName}</div>
      <div>{description}</div>
      {actions && actions.map((item) => {
        return (
          <div key={item.description}>
            <p>{item.description}</p>
            <button type="button" onClick={() => onNextAction(item.type, item.direction)}>Go {item.direction}</button>
          </div>
        )
      })}

    </>
  )
};

export default GameBoard;