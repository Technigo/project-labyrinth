import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loading } from 'reducers/loading';
import { maingame } from 'reducers/maingame';
// import { GamePage } from 'components/GamePage';
import { StartPage } from 'components/StartPage';

export const App = () => {
  const reducer = combineReducers({
    maingame: maingame.reducer,
    loading: loading.reducer
  });
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <StartPage />
    </Provider>
  )
}
