import { combineReducers } from '@reduxjs/toolkit'

import { game } from './game'
import { ui } from './ui'

export const rootReducer = combineReducers({ game: game.reducer, ui: ui.reducer })
