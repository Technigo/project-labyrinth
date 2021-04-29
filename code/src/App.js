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
//https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260

//move global style to content so that we can access store from there and target the description in image url
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_includes

const reducer = combineReducers({
  labyrinth: labyrinth.reducer
});

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Content />
    </Provider>
  )
}
