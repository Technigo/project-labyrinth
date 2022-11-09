import React from 'react'
import { useSelector } from 'react-redux'
import { StartGame } from './StartGame'
import { PlayingGame } from './PlayingGame'

export const StartScreen = () => {
  const location = useSelector((store) => store.game.location);

  return (
    <div>
      {location
        ? <PlayingGame />
        : <StartGame />}
    </div>
  )
}

/* import React from 'react';
import { useSelector } from 'react-redux';
import game from 'reducers/game';
import Labyrinth from './Labyrinth'
import Game from './Game';

const StartScreen = () => {
  // const description = useSelector((store) => store.game.location);
  // console.log(description)

  return <div> <Game /> </div>
  // return <div> {description ? <Labyrinth /> : <Game />} </div>
}

export default StartScreen */