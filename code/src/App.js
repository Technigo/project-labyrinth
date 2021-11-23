import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'


import Main from './components/Main'


import game from './reducers/game'
import ui from './reducers/ui'
import { GlobalStyle } from './GlobalStyle'

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store} >
        <Main />
      </Provider>
    </>
  )
}
