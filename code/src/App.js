import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import StartPage from './components/StartPage'
import { mazegame } from './reducers/mazegame';


const reducer = combineReducers({
  mazegame: mazegame.reducer
});

const store = configureStore({ reducer });



export const App = () => {
  return (
    <Provider store={store}>
      <StartPage />
    </Provider>
  )
}
