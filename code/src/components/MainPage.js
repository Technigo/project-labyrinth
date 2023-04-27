import React from 'react';
import { useSelector } from 'react-redux';
import StartPage from './StartPage.js'
import GameBoard from './GameBoard.js'
import { FinalPage } from './FinalPage.js'
import { LoadingPage } from './LoadingPage.js'

const MainPage = () => {
  const isLoading = useSelector((store) => store.loading.isLoading)
  console.log(isLoading, 'isLoading')

  const globalGameStep = useSelector((store) => store.game.gameStep.coordinates);

  if (isLoading) {
    return <LoadingPage />
  } else if (globalGameStep === '0,0' || globalGameStep === '1,0' || globalGameStep === '1,1' || globalGameStep
  === '0,1' || globalGameStep === '0,2' || globalGameStep === '0,3') {
    return <GameBoard />
  } else if (globalGameStep === '1,3') {
    return <FinalPage />
  }
  return (
    <StartPage />)
}

export default MainPage;