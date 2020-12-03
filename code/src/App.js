import React from 'react'
import { game } from './reducers/game';

import GameControls from './component/GameControls'
import GameContainer from './component/GameContainer'
import { Provider } from 'react-redux';


import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducer = combineReducers({ game: game.reducer });
const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
    <div>
  
      
      <GameContainer />
      <GameControls />
      
    </div>
    </Provider>
  )
}
