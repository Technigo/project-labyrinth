import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import game from './reducers/game';
import Game from './components/Game';

import 'nes.css/css/nes.min.css';

const reducer = combineReducers({
	game: game.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<Container>
				<Game />
			</Container>
		</Provider>
	);
};

const Container = styled.div`
	background-color: rgba(255, 255, 255, 0.65);
	max-width: 700px;
	width: 90%;
	margin: 4rem auto;
	padding: 1rem;
	min-height: 100%;
`;
