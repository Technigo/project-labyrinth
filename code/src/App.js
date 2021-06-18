import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import Home from './pages/Loading'
import questions from './reducers/questions'

const reducer = combineReducers({
   questions: questions.reducer
});

const store = configureStore({ reducer });

export const App = () => {
  return (
   <Provider store={store}>
     <Home />
   </Provider>
    
  )
}
