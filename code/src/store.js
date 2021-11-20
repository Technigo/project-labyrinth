import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { maze } from './Reducers/maze.js';
import { ui } from './Reducers/ui'

const reducer = combineReducers({
    maze: maze.reducer,
    ui: ui.reducer,
})

export const store = configureStore({ reducer: reducer })
