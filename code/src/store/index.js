/* eslint-disable no-underscore-dangle */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { save, load } from 'redux-localstorage-simple';
import { save, load } from './localStorage';
import game from './game';

const reducer = combineReducers({
  game
});

const store = configureStore({ reducer, middleware: load({ namespace: 'myGame' }) });
store.subscribe(() => save(store.getState(), { namespace: 'myGame' }))
export default store;