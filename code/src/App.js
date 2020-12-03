import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { GameBegin } from './components/GameBegin'
import { gameDetails } from 'reducers/gameDetails'
import styled from 'styled-components'

const reducer = combineReducers({ gameDetails: gameDetails.reducer });

const store = configureStore({ reducer });

const Wrapper = styled.section`
  background-color: #202225;
  color: white;
  min-height: 400px;
  height: 100%;
  max-width: 400px;
  width: 100%; 
  box-sizing: border-box;
  font-family: 'Inconsolata', monospace;
  padding: 10px;
  margin: 50px auto;
`



export const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <GameBegin />
      </Wrapper>
    </Provider>
  )
}
