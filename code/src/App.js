import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

//this is the reducers
import { labyrinth } from './reducers/labyrinth'
import { animation } from './reducers/animation'

//this is the components
import StartPage from './components/StartPage'
import Loading from './components/Loading'

//this combines the reducers-slices
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
