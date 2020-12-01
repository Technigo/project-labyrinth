import React  from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { game } from '../src/reducers/game'
import { ui } from '../src/reducers/ui'
import { StartButton } from 'components/StartButton'
import { StartGame } from 'components/StartGame'
import { Playerposition } from 'components/Playerposition'
import { LoadingIndicator } from 'components/LoadingIndicator'


const reducer = combineReducers ({ 
  game: game.reducer,
  ui: ui.reducer 
})
const store = configureStore({ reducer })

export const App = () => {


  return (
    <Provider store={store}>
     <StartButton /> 
     <StartGame />
     <LoadingIndicator />
     <Playerposition/>
    </Provider>
  )
}
