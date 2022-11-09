import React from 'react'
import { useSelector } from 'react-redux'
import Quotes from './Game'
import StartPage from './StartPage'

const StartScreen = () => {
  const games = useSelector((store) => store.game.games);

  return (
    <div> {games === '' ? <Quotes /> : <StartPage />}</div>
  )
}
export default StartScreen;
