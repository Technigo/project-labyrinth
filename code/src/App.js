import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { labyrinth } from './reducers/game'

import GameScreen from './components/GameScreen'

export const Wrapper =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const reducer = combineReducers({
  labyrinth: labyrinth.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Wrapper>
      <Provider store={store}>
        <GameScreen/>
      </Provider>
    </Wrapper>
  )
}
