import React from "react"
import { Provider } from "react-redux"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { MainPage } from "./components/Main"
import { labyrinth } from "reducers/labyrinth"
import { ui } from "reducers/ui"
import { Loader } from "components/Loader"

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  ui: ui.reducer,
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Loader />
        <MainPage />
      </Provider>
    </>
  )
}
