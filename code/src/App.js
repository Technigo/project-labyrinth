import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import React, { useEffect } from 'react'
import Main from 'components/Main'
import { ui } from 'reducers/ui'
import { game, generateGame } from 'reducers/game'
// Import GlobalStyle from

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer,
    ui: ui.reducer
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
