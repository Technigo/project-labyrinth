// ALLT IMPORTERAT FRÅN NINAS TODO SELECTSTART
import React from 'react'
import { useSelector } from 'react-redux'

// Components
import { StartPage } from './StartPage';
import { GamePage } from './GamePage';

export const SelectPage = () => {
  const position = useSelector((store) => store.labyrinth.position)

  return (
    <>
      {/* position true = GamePage otherwise StartPage */}
      {position ? <GamePage /> : <StartPage />}
    </>
  )
}