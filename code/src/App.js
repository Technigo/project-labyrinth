import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import styled from "styled-components/macro"


import { Game } from "./components/Game"
import { LoadingIndicator} from "./components/LoadingIndicator"

import { ui } from "./reducers/ui"
import { game } from "./reducers/game"

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer
})

const Main = styled.div`
  background-image: url(./assets/background.jpg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
	background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`   
const store = configureStore({ reducer })

export const App = () => {
  return (
    
    <Provider store={store}>
      <Main>
        <LoadingIndicator />
        <Game />
      </Main>
    </Provider>
  )
}
