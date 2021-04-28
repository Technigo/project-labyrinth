/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { save, load } from './localStorage';
import game from './game';
import room from './room';

const reducer = combineReducers({
  game,
  room
});

const store = configureStore({
  reducer,
  enhancers: load({ namespace: 'myGame' })
});
store.subscribe(() => save(store.getState(), { namespace: 'myGame' }));
export default store;
