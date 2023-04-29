import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { labyrinth, game } from 'reducers/labyrinth';
import { Background } from 'components/global-style/BackGround';
import { StartPage } from 'components/StartPage';

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  game: game.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <section className="main-container">
      <Provider store={store}>
        <Background />
        <div>
          <StartPage />
        </div>
      </Provider>
    </section>
  )
}
