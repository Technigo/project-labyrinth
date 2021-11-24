import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { maze } from 'reducers/maze'
import { ui } from 'reducers/ui'
import { Starter } from './components/Starter'
import styled from "styled-components"

import Game from "./components/Game"
import Loader from "./components/Loader"

const AppMain = styled.main`
  max-width: 500px;
  margin: 0 auto;
`

const reducer = combineReducers({
  ui: ui.reducer,
  maze: maze.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>
      <AppMain>
        <Loader />
        <Game />
      </AppMain>
    </Provider>
  )
}
