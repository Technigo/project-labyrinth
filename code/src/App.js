// /////////////// IMPORTS //////////////////////// //

import React from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { labyrinthMango } from './Reducers/labyrinth';
import { Firstscreen } from './Components/Firstscreen';
import { GlobalRules } from './Styles/Globalstyles';

// /////////////// COMPONENT //////////////////////// //

export const App = () => {
  const reducer = combineReducers({
    labyrinthMango: labyrinthMango.reducer
  });
  const store = configureStore({ reducer })

  // /////////////// OUTCOME //////////////////////// //

  return (
    <div>
      <Provider store={store}>
        <GlobalRules />
        <Firstscreen />
      </Provider>
    </div>
  )
}
