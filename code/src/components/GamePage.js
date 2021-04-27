import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import mazegame from '../reducers/mazegame'

const GamePage = () => {
  const gameStatus = useSelector(store => store.mazegame.gameStatus)
 console.log(gameStatus.description)

  return(
      <p>{gameStatus.description}</p>
      // <button>{}</button>
    )
}

export default GamePage