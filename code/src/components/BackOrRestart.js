import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { game } from '../reducers/game';

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
    width: 100%
  `

  const ButtonPlaceholder = styled.button`
    border: 2px solid green;
    margin: 20px;
  `

  if (coordinates === '1,3') {
    return (
      <ButtonContainer>
        Great! You made it out of the maze. Want to try again?
        <ButtonPlaceholder onClick={onRestart}>
          Start again
        </ButtonPlaceholder>
      </ButtonContainer>
    )
  } else {
    return (
      <ButtonContainer>
        Does this feel wrong?
        <ButtonPlaceholder onClick={onGoBack}>
          Go back
        </ButtonPlaceholder>
      </ButtonContainer>
    )
  }
};
