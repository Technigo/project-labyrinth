import React from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { labyrinth } from './Reducers/labyrinth';
import { Firstscreen } from './Components/Firstscreen';

export const App = () => {
  const reducer = combineReducers({
    labyrinth: labyrinth.reducer
  })
  const store = configureStore({ reducer })

  return (
    <div>
      <Provider store={store}>
        <Firstscreen />
      </Provider>
    </div>
  )
}
