import React from "react"
import { Provider, useSelector } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { MainPage } from "./components/Main"
import { labyrinth } from "reducers/labyrinth"
import { ui } from "reducers/ui"
import { Loader } from "components/Loader"
import { GameScreen } from "components/GameScreen"

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  ui: ui.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GameScreen />
    </Provider>
  )
}
