/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useSelector } from 'react-redux';

const Location = () => {
  const currentLocation = useSelector((store) => store.labyrinth);
  console.log('currentLocation', currentLocation)
  const actionDirections = currentLocation.actions.map((action) => {
    return (
      <p key={action.description}>To the {action.direction}, {action.description}</p>
    )
  })
  const actionButtons = currentLocation.actions.map((action) => {
    return (
      <button key={action.description} type="button">{action.direction}</button>
    )
  })
  return (
    <div>
      <h2>{currentLocation.description}</h2>
      <div>
        {actionDirections}
        <p>Which direction do you chose?</p>
        {actionButtons}
      </div>
      {/* <div>
        <p>map of labyrinth</p>
      </div> */}
    </div>
  )
}
export default Location;
