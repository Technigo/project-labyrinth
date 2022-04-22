import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { gamereducer } from 'reducers/gamereducer';
import Start from 'components/Start';

const reducer = combineReducers({
	gamereducer: gamereducer.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<Start />
		</Provider>
	);
};
