import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import React, { useEffect } from 'react'
import Main from 'components/Main'
import game, { generateGame } from 'reducers/game'
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// Importera game from redcers här
// Importera ui from reducers här
// Importera main from components här
// Import GlobalStyle from

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer
  });

  const store = configureStore({ reducer });

  useEffect(() => {
    store.dispatch(generateGame());
  }, [store]);

  return (
    <Provider store={store}>
      Gurus rule.
      <Main />
    </Provider>
  )
}
