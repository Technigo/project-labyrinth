
import React from 'react';
import { useSelector } from 'react-redux'

import { StartPage } from 'components/StartPage';
import { GamePage } from 'components/GamePage';
import { TheEnd } from 'components/TheEnd';

import { LoadingIndicator } from './LoadingIndicator';

export const GameWrapper = () => {

  const username = useSelector((store) => store.gamestate.username)
  const gameStatus = useSelector(store => store.gamestate.currentChoice);
  const isLoading = useSelector((store) => store.ui.isLoading)


  //https://reactjs.org/docs/conditional-rendering.html
  //switch syntax - depending on where the user is in the game it triggers different senarios
  let componentToShow;
  if (isLoading) {
    componentToShow = <LoadingIndicator />;
  } else {
    if (!username) {
      componentToShow = <StartPage />;
    } else {
      switch (gameStatus.coordinates) {
        case '1,3':
          componentToShow = <TheEnd />;
          break;
        default:
          componentToShow = <GamePage />;
          break;
      }
    }
  }

  return (
    <>
      {componentToShow}
    </>
  )
}