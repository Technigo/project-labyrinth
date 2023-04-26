import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateOptions } from 'reducers/labyrinth';

const GameScreen = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const dispatch = useDispatch()
  // gameActions within an object. map through the actions.
  console.log('actions:', actions)
  return (
    <>
      {actions.map((action) => {
        return (
          <div>
            <p>{action.description}</p>
            <button type="button" onClick={() => dispatch(generateOptions(action.type, action.direction))}>{action.direction}</button>
          </div>
        )
      })}
    </>
  )
}

export default GameScreen;

// end coordinates:'1,3' actions array is empty = the end.