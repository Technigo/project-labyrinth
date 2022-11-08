import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import quotes from 'reducers/quotes'
import StartScreen from 'components/StartScreen'

export const App = () => {
  const reducer = combineReducers({
    quotes: quotes.reducer
  });
  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <div>
        <StartScreen />
      </div>
    </Provider>
  )
}
