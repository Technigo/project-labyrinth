import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import Loader from './components/Loader'
import NotFoundPage from './components/NotFoundPage'
import ui from './reducers/ui'

const reducer = combineReducers({
  ui: ui.reducer,
  // x: x.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Loader />
      <NotFoundPage />
    </Provider>
  )
}
