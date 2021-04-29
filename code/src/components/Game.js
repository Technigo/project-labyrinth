import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { NameInput } from './NameInput'
import { GameScreen } from './GameScreen'
import { WelcomeScreen } from './WelcomeScreen'

import game from '../reducers/game'

const Game = () => {
  const userName = useSelector((store) => store.game.userName)
  const gameStart = useSelector((store) => store.game.gameStart)

  if (gameStart) {
    return (
      <main>
        <GameScreen />
      </main>
    )
  } else {
    return <main>{userName ? <WelcomeScreen /> : <NameInput />}</main>
  }
}

export default Game
