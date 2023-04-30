import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { game } from '../reducers/game'

const StyledContainer = styled.div``

const StyledDescriptionText = styled.p``

const EndingPage = () => {
  const dispatch = useDispatch();

  const handleRestart = () => { dispatch(game.actions.restart()) }
  const currentResponse = useSelector((state) => state.game.response)

  return (
    <StyledContainer>
      <StyledDescriptionText>
        {currentResponse.description}
      </StyledDescriptionText>
      <button
        type="button"
        onClick={() => handleRestart()}>
          Restart!
      </button>
    </StyledContainer>
  );
}

export default EndingPage;