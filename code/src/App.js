import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { setupStore } from './store/setupStore'
import { Header } from './components/Header'
import { StartPage } from './components/StartPage'
import { CurrentStep } from './components/CurrentStep'

// Retrieve localstorage as initial state
const persistedStateJSON = localStorage.getItem('gameReduxState')
let persistedState = {}

if (persistedStateJSON) {
  persistedState = JSON.parse(persistedStateJSON)
}

const store = setupStore(persistedState)

// Store the state in localstorage when Redux state change
store.subscribe(() => {
  localStorage.setItem('gameReduxState', JSON.stringify(store.getState()))
})

export const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/game' element={<CurrentStep />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
