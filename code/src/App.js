import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore  } from '@reduxjs/toolkit';
import { ui } from 'reducers/ui';
import { game } from 'reducers/store';
import Wrapper from 'components/Wrapper'

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer,
    ui: ui.reducer
})
const store = configureStore({ reducer })
  return (
    <Provider store={store}r>
      <Wrapper />
    </Provider>
  )
}
