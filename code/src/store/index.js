import { combineReducers, applyMiddleware, createStore } from '@reduxjs/toolkit';
import { save, load } from 'redux-localstorage-simple';
import game from './game';

const reducer = combineReducers({
  game
});
const createStoreWithMiddleware = applyMiddleware(
  save()
)(createStore);

export default createStoreWithMiddleware(
  reducer,
  load({
    states: ['game'],
    preloadedState: {
      game: {
        state: "Start"
      }
    }
  })
);
