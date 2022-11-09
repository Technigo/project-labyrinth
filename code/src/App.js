import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import labyrinth from 'reducers/labyrinth';
import MainComponent from 'components/MainComponent';
import { OuterWrapper } from './components/mainStyles';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  });
  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <OuterWrapper>
        <MainComponent />
      </OuterWrapper>
    </Provider>
  )
}