import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { nextStepThunk } from 'reducers/labyrinthSlice';
import styled from 'styled-components';

import { UserActions } from './UserActions';

// Styled Components
const StyledWrapper = styled.section`
	display: flex;
`;

const StyledDescription = styled.div`
	margin: auto auto;
`;

const StyledDirectionText = styled.p``;

const StyledDirectionSpan = styled.span`
	font-weight: bolder;
`;

export const Labyrinth = () => {
	const { description, coordinates, actions } = useSelector(
		(store) => store.labyrinthSlice.currentPosition
	);
	// const dispatch = useDispatch();

	// const nextStep = (type, direction) => {
	// 	dispatch(nextStepThunk(type, direction));
	// };

	// const UserActions = ({ description, type, direction }) => (
	// 	<div className='direction-buttons'>
	// 		<p>{description}</p>

	// 		<button onClick={() => nextStep(type, direction)}>
	// 			{type} {direction}
	// 		</button>
	// 	</div>
	// );

	return (
		<>
			{/* Main description of current coordinates */}
			<StyledDescription>
				<h1>{description}</h1>
				<p>{coordinates}</p>
			</StyledDescription>

			{actions.length === 0 && <h1>Yay, you made it out!</h1>}
			{/* <div className='button-container'> */}
			{/* Map over direction buttons and direction descriptions */}
			{actions.length > 0 &&
				actions.map((choice) => (
					<StyledWrapper key={choice.direction} {...choice}>
						<UserActions key={choice.direction} {...choice} />
						<StyledDirectionText key={choice.description}>
							You look to the&nbsp;
							<StyledDirectionSpan>{choice.direction}</StyledDirectionSpan>.
							&nbsp;
							{choice.description}
						</StyledDirectionText>
					</StyledWrapper>
				))}
			{/* </div> */}
		</>
	);
};
