import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStepThunk } from 'reducers/labyrinthSlice';

import styled from 'styled-components';

export const Labyrinth = () => {
  const { description, actions } = useSelector((store) => store.labyrinthSlice.currentPosition);
  const dispatch = useDispatch();

  const nextStep = (type, direction) => {
    dispatch(nextStepThunk(type, direction));
  };

  const UserActions = ({ type, direction }) => (
    <div className="direction-buttons">
      <InputButton onClick={() => nextStep(type, direction)}>
        {type} {direction}
      </InputButton>
    </div>
  );

  return (
    <>
      {/* Main description of current coordinates */}
      <StyledDescription>
        <h1>{description}</h1>
      </StyledDescription>

      {actions.length === 0 && <h2>Yay, you made it out!</h2>}

      {/* Map over direction buttons and direction descriptions */}
      {actions.length > 0 &&
        actions.map((choice) => (
          <ButtonContainer>
            <StyledDirectionText key={choice.description}>
              <YouLookToThe>
                You look to the&nbsp;
                <StyledDirectionSpan>{choice.direction}</StyledDirectionSpan>.
              </YouLookToThe>
              {choice.description}
            </StyledDirectionText>
            <UserActions key={choice.direction} {...choice} />
          </ButtonContainer>
        ))}
    </>
  );
};

const StyledDescription = styled.div`
  margin: 10px 0px;
`;

const StyledDirectionText = styled.p``;

const StyledDirectionSpan = styled.span`
  font-weight: bolder;
`;

const YouLookToThe = styled.span`
  display: block;
`;

const ButtonContainer = styled.div`
	width:70%;
	margin:0 auto;
	display: flex;
	flex-direction: column;
	align-content:center;
	align-items:center;
`

const InputButton = styled.button`
padding:10px 20px;
background:black;
color:white;
border-radius: 2px;
border:1 px solid black;
`
