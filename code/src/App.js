import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { games } from './reducers/games';
import { Game } from './Game';
import { ui } from 'reducers/ui';

const reducer = combineReducers({ games: games.reducer, ui: ui.reducer });

const store = configureStore({ reducer });
// console.log(store.initialState);

export const App = () => {
	return (
		<Provider store={store}>
			<Game />
		</Provider>
	);
};
