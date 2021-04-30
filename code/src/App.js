import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createGlobalStyle } from "styled-components/macro"

import labyrinth from './reducers/labyrinth'
import Content from './components/Content'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('/assets/desktop-image.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    font-family: 'New Tegomin', serif;
  }
`

const reducer = combineReducers({
  labyrinth: labyrinth.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Content />
    </Provider>
  )
}
