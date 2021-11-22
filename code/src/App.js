import React from "react"
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { ui } from "./reducers/ui"
import { game } from "./reducers/game"
import { Game } from "./components/Game"
import { Start } from "./components/Start"

const reducer = combineReducers({
  ui: ui.reducer,
  game: game.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Start />
      <Game />
    </Provider>
  )
}
