import React from 'react';
import { useDispatch } from 'react-redux';
import { nextStep } from 'reducers/game';
import styled from 'styled-components/macro';
import { Button } from './styling/MainStyles';

const NextDirection = ({ actions }) => {
  const dispatch = useDispatch()

  const goNextOnClick = (direction) => {
    dispatch(nextStep(direction))
  }

  return (
    <div>
      {actions.map((action) => (
        <DirectionWrapper key={action.direction}>
          <Button
            type="button"
            onClick={() => goNextOnClick(action.direction)}>
             Go {action.direction}
          </Button>
          <div>
            <h3>{action.description}</h3>
          </div>
        </DirectionWrapper>
      ))}
    </div>
  )
}

export default NextDirection

const DirectionWrapper = styled.div`
  margin: 50px;
  border: solid orange 1px;
`