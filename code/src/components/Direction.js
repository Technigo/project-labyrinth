import React from 'react';
import { useDispatch } from 'react-redux';
import { nextStep } from 'reducers/game';
import styled from 'styled-components/macro';

const NextDirection = ({ actions }) => {
  const dispatch = useDispatch()

  const goNextOnClick = (direction) => {
    dispatch(nextStep(direction))
  }

  return (
    <div>
      {actions.map((action) => (
        <DirectionWrapper key={action.direction}>
          <StyledButton
            type="button"
            onClick={() => goNextOnClick(action.direction)}>
            {action.description}
            <p>Go {action.direction}</p>
          </StyledButton>
        </DirectionWrapper>
      ))}
    </div>
  )
}

export default NextDirection

const DirectionWrapper = styled.div`
  margin-top: 24px;
`

const StyledButton = styled.button`
  background-color: black;
  color: white;
  font-weight: 700;
  border: 2px solid white;
  padding: 16px 24px;
  line-height: 24px;

  &:hover {
    background-color: white;
    color: black;
  }

  p {
    margin: 0px;
    color: orange;
  }

  @media (min-width: 819px) {
    width: 650px;
  }

  @media (min-width: 1025px) {
    width: 910px;
  }
`