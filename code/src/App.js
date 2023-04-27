import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createGlobalStyle } from 'styled-components'
import { maze } from 'reducers/maze'
import Main from 'components/Main'

export const App = () => {
  const reducer = combineReducers({
    maze: maze.reducer
  })

  const store = configureStore({
    reducer
  })
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  )
}

const GlobalStyle = createGlobalStyle`
* {
margin: none;
padding: none;
font-family: 'Pirata One', cursive;
box-sizing: border-box;
}

`
