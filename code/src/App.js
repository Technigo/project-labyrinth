import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { Labyrinth } from 'components/Labyrinth';
import { Loading } from 'components/Loading';

import { labyrinthSlice } from 'reducers/labyrinthSlice';

const reducer = combineReducers({
	labyrinthSlice: labyrinthSlice.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<main>
			<Provider store={store}>
				<Labyrinth>
					<Loading />
				</Labyrinth>
			</Provider>
		</main>
	);
};
