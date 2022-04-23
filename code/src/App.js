import React from 'react'
import { Provider } from "react-redux"
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import game from 'reducers/game'
import ui from 'reducers/ui'
import Game from 'components/Game'
import Loader from 'components/Loader'


import AudioPlayer from "./components/AudioPlayer"

  
const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer: reducer })


export const App = () => {
  return (
    <Provider store={store}>
      
      <Loader />
      <Game />
      <AudioPlayer />

    </Provider>
  )
}
