import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { maze } from 'reducers/maze'
import { ui } from 'reducers/ui'
import styled from "styled-components"

import Game from "./components/Game"
import Loader from "./components/Loader"

// Styled components
const AppBody = styled.main`
  background-image: url("./assets/maze-bg.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
`

const reducer = combineReducers({
  ui: ui.reducer,
  maze: maze.reducer
})

const store = configureStore({ reducer })

// App
export const App = () => {
  return (
    <AppBody>
      <Provider store={store}>
        <Loader />
        <Game />
      </Provider>
    </AppBody>
  )
}
