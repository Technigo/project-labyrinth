import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { labyrinth } from 'reducers/labyrinth'
import { loading } from 'reducers/loading'
import { Main } from 'components/Main'

const reducer = combineReducers({
  labyrinth: labyrinth.reducer,
  loading: loading.reducer
})

const store = configureStore({ reducer })
export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
