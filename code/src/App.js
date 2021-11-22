import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { coolestLoader } from './reducers/coolestLoader';
import { maze } from './reducers/maze';
import { LoadingIndicator } from './components/LoadingIndicator';
import { MazeAlternatives } from './components/MazeAlternatives';

import './index';

// adds the reducers into one reducer to be able to configure the store with one reducer
const reducer = combineReducers({
	coolestLoader: coolestLoader.reducer,
	maze: maze.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<main className="app">
				<LoadingIndicator />
				<MazeAlternatives />
			</main>
		</Provider>
	);
};
