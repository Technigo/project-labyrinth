import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import labyrinth from 'reducers/labyrinth'
import ContentContainer from 'components/ContentContainer'
import { GlobalStyles } from 'components/GlobalStyles'

export const App = () => {
  const reducer = combineReducers({ labyrinth: labyrinth.reducer })
  const store = configureStore({ reducer })

  return (
    <Provider store={store}>
      <GlobalStyles />
      <ContentContainer />
    </Provider>
  )
}
