import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { game } from './reducers/game';
import StartPage from './components/StartPage';
import MainGame from './components/MainGame';
import { spinner } from 'reducers/spinner';
import creepysound from './sounds/creepy_sound.mp3';

const reducer = combineReducers({
  game: game.reducer,
  spinner: spinner.reducer,
});

const store = configureStore({ reducer: reducer });

let audio = new Audio(creepysound);
const startMusic = () => {
  audio.play();
  audio.volume = 0.2;
  audio.loop = true;
};

const stopMusic = () => {
  audio.pause();
};

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage startMusic={startMusic} />} />
          <Route
            path='/MainGame'
            element={<MainGame stopMusic={stopMusic} />}
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
