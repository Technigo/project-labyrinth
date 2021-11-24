import React from 'react'
import { Provider, useSelector } from "react-redux"
import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { maze } from 'reducers/maze'
import { ui } from 'reducers/ui'
import { Starter } from './components/Starter'

import User from "./components/User"
import Loader from "./components/Loader"

const reducer = combineReducers({
  ui: ui.reducer,
  maze: maze.reducer
  
})

const store = configureStore({ reducer })



export const App = () => {



  return (
    <Provider store={store}>
      <div>
         <Starter />
        <User />
        
      </div>
      <Loader />
    </Provider>
  )
}
