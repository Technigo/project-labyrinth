import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { StartPage } from 'components/StartPage'
import { loader } from 'reducers/loader'
import { labyrinth } from 'reducers/labyrinth'


const reducer = combineReducers({
   labyrinth: labyrinth.reducer,
   loader: loader.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
    <main>
      <StartPage />
    </main>
    </Provider>
  )
}
