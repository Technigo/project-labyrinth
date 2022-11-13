/* eslint-disable linebreak-style */
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import labyrinth from 'reducers/labyrinth';
import ui from 'reducers/ui';
import MainComponent from 'components/MainComponent';
import Choices from 'components/Choices';
import Loading from './components/Loading';
import { OuterWrapper } from './components/mainStyles';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer,
    ui: ui.reducer
  });
  const store = configureStore({
    reducer
  })

  return (
    <Provider store={store}>
      <OuterWrapper>
        <Loading /> {Choices === '' ? <Loading /> : <MainComponent />}
      </OuterWrapper>
    </Provider>
  )
}