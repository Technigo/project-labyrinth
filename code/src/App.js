import React, { Provider } from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import WelcomeScreen from 'components/WelcomeScreen';
import labyrinth from './reducers/labyrinth'

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <WelcomeScreen />
    </Provider>
  )
}
