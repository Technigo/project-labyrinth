import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { game } from 'reducers/game';
import { ui } from 'reducers/ui';

import GameBoard from 'components/GameBoard';
import RestartButton from 'components/RestartButton';
import LoadingStuff from 'components/LoadingStuff';

import bgMusic from './assets/bgmusic.wav';

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
});

const store = configureStore({ reducer });

let audio = new Audio(bgMusic);
const startBgMusic = () => {
  audio.volume = 0.2;
  audio.loop = true;
  audio.play();
};

const stopBgMusic = () => {
  audio.currentTime = 0;
};

export const App = () => {
  return (
    <Provider store={store}>
      <>
        <GameBoard startBgMusic={startBgMusic} />
        <RestartButton stopBgMusic={stopBgMusic} />
        <LoadingStuff />
      </>
    </Provider>
  );
};
