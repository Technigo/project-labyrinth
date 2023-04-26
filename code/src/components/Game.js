/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { useSelector } from 'react-redux';

const Game = () => {
  const labyrinth = useSelector((store) => store.labyrinth)
  console.log('labyrinth details', labyrinth)

  return (
    <div>
      <p>{labyrinth.response.description}</p>
      {labyrinth.response.actions.map((userAction) =>
        <>
          <p>{userAction.type}:{userAction.direction}</p>
          <p>{userAction.description}</p>
        </>)}
    </div>)
}

export default Game;
