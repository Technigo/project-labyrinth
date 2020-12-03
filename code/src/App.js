import React from 'react'
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { GameBegin } from './components/GameBegin'
import { gameDetails } from 'reducers/gameDetails'

const reducer = combineReducers({ gameDetails: gameDetails.reducer });

const store = configureStore({ reducer });

// const Wrapper = styled.section`

// `

export const App = () => {
  return (
    <Provider store={store}>

      <GameBegin />

    </Provider>
  )
}
