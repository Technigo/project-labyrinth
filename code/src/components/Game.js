import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { NameInput } from './NameInput'
import { GameScreen } from './GameScreen'
import { WelcomeScreen } from './WelcomeScreen'
import { EndScreen } from './EndScreen'
import game from '../reducers/game'

const Game = () => {
  const userName = useSelector((store) => store.game.userName)
  const gameStart = useSelector((store) => store.game.gameStart)
  const gameOver = useSelector((store) => store.game.gameOver)
  const gameCoords = useSelector((store) => store.game.gameData?.coordinates)

  const dispatch = useDispatch()

  if (gameCoords === '1,3') {
    dispatch(game.actions.setGameOver(true))
  }

  if (gameOver) {
    return (
      <main>
        <EndScreen />
      </main>
    )
  } else if (gameStart) {
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
