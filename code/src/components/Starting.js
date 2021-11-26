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
			<WelcomeH1>Welcome, are you ready to enter our house?</WelcomeH1>
			<form onSubmit={start}>
				<NameInputField placeholder="Give us your name..." onChange={handleNameInput} type='text' required></NameInputField>
				<InputButton type='submit'>Enter house</InputButton>
			</form>
		</>
	);
};

const WelcomeH1 = styled.h1`
margin-top:150px;
`


const NameInputField = styled.input`
border:none;
padding: 10px 20px;
width:250px;
margin-right:5px;
border:1px solid black;
margin-bottom:10px;

@media (min-width:599px) {
	margin-bottom:0px;
}
`

const InputButton = styled.button`
padding:10px 20px;
background:black;
color:white;
border-radius: 2px;
border:1 px solid black;
`
