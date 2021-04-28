/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { save } from './localStorage';
import game from './game';
import room from './room';

const reducer = combineReducers({
  game,
  room
});

const store = configureStore({
  reducer
});
store.subscribe(() => save(store.getState().game.user, { namespace: 'user' }));
store.subscribe(() => save(store.getState().room.currentRoom, { namespace: 'room' }));
export default store;
