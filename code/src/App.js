import React from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { labyrinthMango } from './Reducers/labyrinth';
import { Firstscreen } from './Components/Firstscreen';
import { GlobalRules } from './Styles/Globalstyles';

export const App = () => {
  const reducer = combineReducers({
    labyrinthMango: labyrinthMango.reducer
  });
  const store = configureStore({ reducer })

  return (
    <div>
      <Provider store={store}>
        <GlobalRules />
        <Firstscreen />
      </Provider>
    </div>
  )
}
