import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import game from 'reducers/game';
import StartScreen from 'components/StartScreen';
import { InnerWrapper, OuterWrapper } from 'components/styling/MainStyles';
import Header from 'components/styling/Header';

export const App = () => {
  const reducer = combineReducers({
    game: game.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Header />
      <OuterWrapper>
        <InnerWrapper>
          <StartScreen />
        </InnerWrapper>
      </OuterWrapper>
    </Provider>
  )
}
