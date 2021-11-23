import React from 'react'
import { Provider } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { maze } from 'reducers/maze'

import User from "./components/User"

const reducer = combineReducers({
  maze: maze.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <User />
        The Maze!
      </div>
    </Provider>
  )
}
