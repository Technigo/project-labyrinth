import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import labyrinth from './reducers/labyrinth'
import Content from './components/Content'

const reducer = combineReducers({
  labyrinth: labyrinth.reducer
});

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  )
}
