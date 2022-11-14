import React from 'react';
import { useDispatch } from 'react-redux';
import labyrinth from 'reducers/labyrinth';
import styled from 'styled-components/macro';
import { InputButton } from './mainStyles';

const RestartBtn = () => {
  const dispatch = useDispatch();

  const onRestartButton = () => {
    dispatch(labyrinth.actions.clearHistory())
  }

  return (
    <RestartWrapper>
      <InputButton
        type="button"
        onClick={onRestartButton}>RESTART
      </InputButton>
    </RestartWrapper>
  )
}

export default RestartBtn;

const RestartWrapper = styled.div`
  display: flex;
  justify-content: center;
`