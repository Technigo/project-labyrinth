import React from 'react';
import {useSelector} from 'react-redux'

import StartScreen from 'components/StartScreen';
import GameScreen from 'components/GameScreen';

const Game = () => {
const username = useSelector(store => store.labyrinth.data.username)

  return (
    <div>
      {username? <GameScreen /> : <StartScreen />}
    </div>
  )
}

export default Game;