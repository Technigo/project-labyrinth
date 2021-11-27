import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { GameOn } from 'components/GameOn'
import { labyrinth } from 'reducers/labyrinth'


const reducer = combineReducers({
   labyrinth: labyrinth.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (

    <Provider store={store}>
      <GameOn />
    </Provider>
  )
}
