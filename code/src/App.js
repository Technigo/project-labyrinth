import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import styled from 'styled-components'

import { ui } from 'reducers/ui'
import { gameReducer } from './reducers/gameReducer'
import { GameWrapper } from './components/GameWrapper'

const reducer = combineReducers({
  ui: ui.reducer,
  gameReducer: gameReducer.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <GameWrapper />
      </Container>
    </Provider>
  )
}

const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  // background-color: grey;
`
