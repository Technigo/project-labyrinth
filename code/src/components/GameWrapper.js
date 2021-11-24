
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
  //if loading is true show loading indicator. Else if username is defined show gamePage else StartPage
  //?: = if else
  return (
    <>
      {componentToShow}
    </>
  )
}