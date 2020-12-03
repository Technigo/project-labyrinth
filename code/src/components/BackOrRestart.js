import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { game } from '../reducers/game';
import { Button } from '../lib/Styling';

export const BackOrRestart = () => {
  const dispatch = useDispatch();
  const coordinates = useSelector((state) => state.game.currentStep.coordinates)

  const onGoBack = () => {
    dispatch(game.actions.oneStepBack());
  };

  const onRestart = () => {
    dispatch(game.actions.restartGame())
  };

  const ButtonContainer = styled.div`
    /* width: 100%; */
    grid-area: back;
    justify-self: center;
  `

  if (coordinates === '1,3') {
    return (
      <ButtonContainer>
        Great! You made it out of the maze. Want to try again?
        <Button onClick={onRestart}>
          Play again
        </Button>
      </ButtonContainer>
    )
  } else if (coordinates === '0,0') {
    return (
      <>
      </>
    )
  } else {
    return (
      <ButtonContainer>
        Does this feel wrong?
        <Button onClick={onGoBack}>
          Go back
        </Button>
      </ButtonContainer>
    )
  }
};
