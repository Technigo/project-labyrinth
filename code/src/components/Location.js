/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-no-useless-fragment */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import labyrinth, { moveOn } from 'reducers/labyrinth';
import styled from 'styled-components/macro';
import Loading from './Loading';
import { LocationWrapper, Button } from './reusableStyles';

const Location = () => {
  const currentLocation = useSelector((store) => store.labyrinth);
  const dispatch = useDispatch();

  /*   const actionDirections = currentLocation.actions.map((action) => {
    return (
      <p key={action.description}>{action.description}</p>
    )
  }) */

  const actionButtons = currentLocation.actions.map((action) => {
    // send chosen direction to reducer.
    const pickDirection = (direction) => {
      dispatch(labyrinth.actions.setDirection(direction))
      dispatch(moveOn())
    }
    return (
      <SingleChoice key={action.description}>
        <p>{action.description}</p>
        <Button
          value={action.direction}
          type="button"
          onClick={(event) => pickDirection(event.target.value)}>
          {action.direction}
        </Button>
      </SingleChoice>
    )
  })

  return (
    <>
      {currentLocation.isLoading ? <Loading />
        : <LocationWrapper>
          <h2>{currentLocation.description}</h2>
          {/* {actionDirections} */}
          {currentLocation.coordinates !== '1,3'
            ? <h3>Which direction do you choose?</h3>
            : <h3>You awake after a good nights sleep and smell your morning coffee</h3>}
          <Choice>
            {actionButtons}
          </Choice>
        </LocationWrapper>}
    </>
  )
}

export default Location;

const SingleChoice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Choice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width:659px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    
    
  }
 
`