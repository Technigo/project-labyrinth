import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { labyrinth } from 'reducers/labyrinth';
import StartScreen from 'components/StartScreen';
import styled from 'styled-components/macro';
import rockbkgrndIMG from './assets/rockbackground.jfif'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  background-image: url(${rockbkgrndIMG});
  background-size: contain;`

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Wrapper>
        <StartScreen />
      </Wrapper>
    </Provider>
  )
}
