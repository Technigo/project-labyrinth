import React from 'react';
import { useSelector } from 'react-redux';

import { NameInput } from './NameInput';
import { Header } from './Header';
import { Footer } from './Footer';
import { DirectionChoice } from 'components/DirectionChoice';

export const Labyrinth = () => {
	const username = useSelector((store) => store.labyrinthSlice.username);
	return (
		<>
			<Header />
			<NameInput />
			<DirectionChoice />
			<Footer />
		</>
	);
};
