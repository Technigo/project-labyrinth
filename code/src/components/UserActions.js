import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { nextStepThunk } from 'reducers/labyrinthSlice';

export const UserActions = ({ type, direction }) => {
	const dispatch = useDispatch();

	const nextStep = (type, direction) => {
		dispatch(nextStepThunk(type, direction));
	};

	return (
		<StyledDirectionButton onClick={() => nextStep(type, direction)}>
			<StyledArrowImage
				src='https://img.icons8.com/material-rounded/24/000000/give-way.png'
				aria-label={direction + `arrow`}
				direction={direction}
			/>
		</StyledDirectionButton>
	);
};

const StyledDirectionButton = styled.button`
	background:black;
	color:white;
`;
