import React from 'react';
import { useDispatch } from 'react-redux';
import { labyrinthSlice } from 'reducers/labyrinthSlice';
import styled from 'styled-components';

import { startGameThunk } from 'reducers/labyrinthSlice';

export const Starting = () => {
	const dispatch = useDispatch();

	const handleNameInput = (event) => {
		dispatch(labyrinthSlice.actions.setUserName(event.target.value));
	};

	const start = (event) => {
		event.preventDefault();
		dispatch(startGameThunk());
	};

	return (
		<>
			<h1>Welcome, do you want to enter our Labyrinth?</h1>
			<form onSubmit={start}>
				<NameInputField onChange={handleNameInput} type='text' required></NameInputField>
				<InputButton type='submit'>Enter name</InputButton>
			</form>
		</>
	);
};

const NameInputField = styled.input`
border:none;
padding: 10px 20px;
width:250px;
margin-right:5px;
border:1px solid black;
`

const InputButton = styled.button`
padding:10px 20px;
background:black;
color:white;
border-radius: 2px;
border:1 px solid black;
`
