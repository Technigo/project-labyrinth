import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import quotes from 'reducers/quotes';

import Quotes from 'components/Quotes';

const reducer = combineReducers({
  quotes: quotes.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <Quotes />
    </Provider>
  )
}
