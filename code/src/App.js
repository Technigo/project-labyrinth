import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import "nes.css/css/nes.min.css";
// import { useDispatch } from "react-redux"

import game from './reducers/game'
import StartPage from './components/StartPage'
import MainGame from './components/MainGame'

import {Container} from './components/Style'

const reducer = combineReducers({
  game: game.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />}/>
          <Route path="/MainGame" element={<MainGame />}/>
        </Routes>
        </BrowserRouter>
      </Container>
    </Provider>
  )
}
