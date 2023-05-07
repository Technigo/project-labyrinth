import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { labyrinth } from 'reducers/labyrinth';
import StartScreen from 'components/StartScreen';
import styled from 'styled-components/macro';
import rockbkgrndIMG from './assets/rockbackground.jfif'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-image: url(${rockbkgrndIMG});
  background-size: contain;
  justify-content: center;`

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
