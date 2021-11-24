import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startGame } from '../reducers/game'
import { LoadingIndicator } from 'components/LoadingIndicator'
import { LandingPageAnimation } from 'components/LandingPageAnimation'


const StartGame = () => {
  const dispatch = useDispatch()
  const name = useSelector(state => state.game.userName)
  const loading = useSelector(state => state.ui.loading)

  return (
    <div>
      {loading ? <LoadingIndicator /> : <LandingPageAnimation />}
      <p>Hello {name}, this game works like this</p>
      <p>blablabla</p>
      <p>blablabla</p>
      <p>blablabla</p>
      <p>Click this button to start the game</p>
      <button
        type="submit"
        onClick={() => dispatch(startGame())}
      >Click</button>
    </div>
  )
}

export default StartGame
