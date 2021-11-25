import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

import { labyrinthSlice } from 'reducers/labyrinthSlice';
import { Game } from 'components/Game';

const reducer = combineReducers({
	labyrinthSlice: labyrinthSlice.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
	return (
		<Provider store={store}>
			<Game />
			<MadeBy>This game was made by Linnea Isebrink and Rebecca Blixt</MadeBy>
		</Provider>
	);
};

const MadeBy = styled.p`
text-align:center;
color:white;`