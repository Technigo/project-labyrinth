
import React from 'react';
import { useSelector } from 'react-redux'

import { StartPage } from 'components/StartPage';
import { GamePage } from 'components/GamePage';

import { LoadingIndicator } from './LoadingIndicator';

export const GameWrapper = () => {

const username = useSelector((store) => store.gamestate.username)
const isLoading = useSelector((store) => store.ui.isLoading)


//if loading is true show loading indicator. Else if username is defined show gamePage else StartPage
//?: = if else
  return (
    <>
      { isLoading ? <LoadingIndicator /> : username ? <GamePage /> : <StartPage /> }
    </>
  )
}