import React from 'react';
// import { generateStage } from './reducers/labyrinth'
import { useSelector } from 'react-redux';

const GameBoard = () => {
  const userName = useSelector((store) => store.labyrinth.username);

  const generateStage = useSelector((store) => store.labyrinth.stage);

  return (
    <>
      <div>Hello {userName}!</div>
      <div>{generateStage.description}</div>
      {generateStage.actions && generateStage.actions.map((action) => {
        return (
          <div key={action.description}>
            <p>{action.description}</p>
            <button type="button"/* onClick={() => } */>{action.direction}</button>
          </div>
        )
      })}
    </>
  )
};

export default GameBoard;