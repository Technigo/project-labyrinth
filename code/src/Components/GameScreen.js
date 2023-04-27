import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateOptions } from 'reducers/labyrinth';

const GameScreen = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const gameDescription = useSelector((store) => store.labyrinth.description)
  console.log(gameDescription)
  const dispatch = useDispatch()
  // gameActions within an object. map through the actions.
  console.log('actions:', actions)

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <>
      <p>{gameDescription}</p>
      {actions.map((action) => {
        return (
          <div>
            <p>{action.description}</p>
            <button type="button" onClick={() => dispatch(generateOptions(action.type, action.direction))}>Go {action.direction}</button>
          </div>
        )
      })}
      <button type="button" onClick={handleRestart}>Restart game</button>
    </>
  )
}

export default GameScreen;

// end coordinates:'1,3' actions array is empty = the end.