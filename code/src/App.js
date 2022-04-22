import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import GlobalStyle from './globalStyle';

import questions from './reducers/questions'
import loading from './reducers/loading'

import Questions from 'components/Questions';




const reducer = combineReducers({
  loading: loading.reducer,
  questions: questions.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>
      <GlobalStyle />
        <Questions />  
    </Provider>
  )
}
