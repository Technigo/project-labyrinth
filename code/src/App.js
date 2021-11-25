import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'


import { labyrinth } from './reducers/labyrinth'
import { animation } from './reducers/animation'

import StartPage from './components/StartPage'
import Loading from './components/Loading'


const reducer = combineReducers ({
  labyrinth: labyrinth.reducer,
  animation: animation.reducer
})

const store =configureStore ({reducer})



export const App = () => {
  return (
    <Provider store={store}>
      
      <Loading />
      
      <StartPage />
      
    </Provider>
  )
}
