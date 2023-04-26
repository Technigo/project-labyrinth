import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const GameScreen = () => {
  const actions = useSelector((store) => store.labyrinth.actions)
  const dispatch = useDispatch()
// gameActions within an object. map through the actions. 

  return (
    <div>
      This is the joke
      <p>{action.direction}</p>
      <p>{action.description}</p>     
    </div>
  )
}

export default GameScreen;

// end coordinates:'1,3' actions array is empty = the end.