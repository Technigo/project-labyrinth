import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quoteSlice from 'features/quotes';
import StartScreen from 'components /StartScreen';

export const App = () => {
	const reducer = combineReducers({
		quotes: quoteSlice.reducer,
	});
	const store = configureStore({ reducer });
	return (
		<Provider store={store}>
			<StartScreen />
		</Provider>
	);
};
