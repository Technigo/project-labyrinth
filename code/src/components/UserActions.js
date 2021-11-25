import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { nextStepThunk } from 'reducers/labyrinthSlice';

// Styled Components
// const StyledDirectionDiv = styled.div`
// 	height: auto;
// 	width: 50%;
// `;

// const StyledDirectionText = styled.p`
// 	font-family: 'Times New Roman', Times, serif;
// `;

// const StyledDirectionSpan = styled.span`
// 	font-weight: bolder;
// `;

const StyledDirectionButton = styled.button`
	z-index: 2;
	background: none;
	border: none;
	margin: 0;
	padding: 0;
	position: fixed;
	display: flex;
	flex-direction: ${(props) =>
		props.direction === 'East'
			? 'row-reverse'
			: props.direction === 'West'
			? 'row'
			: props.direction === 'North'
			? 'column'
			: 'column-reverse'};
	align-items: center;
	justify-content: center;
	transform: translateY(-50%); // To center vertically
	top: ${(props) =>
		props.direction === 'North'
			? '0'
			: props.direction === 'East' || props.direction === 'West'
			? '50%'
			: ''};
	bottom: ${(props) => (props.direction === 'South' ? '20px' : '')};
	left: ${(props) => (props.direction === 'West' ? '20px' : '')};
	right: ${(props) => (props.direction === 'East' ? '20px' : '')};
`;

const StyledArrowImage = styled.img`
	transform: ${(props) =>
		props.direction === 'North'
			? `rotate(180deg)`
			: props.direction === 'East'
			? `rotate(-90deg)`
			: props.direction === 'South'
			? `rotate(0deg)`
			: `rotate(90deg)`};
	margin-top: ${(props) => (props.direction === 'South' ? '10px' : '')};
	margin-bottom: ${(props) => (props.direction === 'North' ? '10px' : '')};
`;

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
