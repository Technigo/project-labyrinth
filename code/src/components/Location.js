/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-no-useless-fragment */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import labyrinth, { moveOn } from 'reducers/labyrinth';
import Loading from './Loading';
import { LocationWrapper, Button } from './reusableStyles';

const Location = () => {
  const currentLocation = useSelector((store) => store.labyrinth);
  console.log('currentLocation', currentLocation)
  const dispatch = useDispatch();

  const actionDirections = currentLocation.actions.map((action) => {
    return (
      <p key={action.description}>{action.description}</p>
    )
  })

  const actionButtons = currentLocation.actions.map((action) => {
    // send chosen direction to reducer.
    const pickDirection = (direction) => {
      dispatch(labyrinth.actions.setDirection(direction))
      console.log(direction);
      dispatch(moveOn())
    }
    return (
      <Button
        key={action.description}
        value={action.direction}
        type="button"
        onClick={(event) => pickDirection(event.target.value)}>
        {action.direction}
      </Button>
    )
  })
  console.log('laddar det eller?', currentLocation.isLoading)
  return (
    <>
      {currentLocation.isLoading ? <Loading />
        : <LocationWrapper>
          <h2>{currentLocation.description}</h2>
          <div>
            {actionDirections}
            <p>Which direction do you chose?</p>
            {actionButtons}
          </div>
        </LocationWrapper>}
    </>
  )
}

export default Location;
