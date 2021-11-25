import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { labyrinthSlice } from 'reducers/labyrinthSlice';
import { Game } from 'components/Game';

const reducer = combineReducers({
	labyrinthSlice: labyrinthSlice.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		// <main>
		<Provider store={store}>
			<Game />
		</Provider>
		// </main>
	);
};
