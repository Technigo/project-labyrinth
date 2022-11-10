/* eslint-disable max-len */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import labyrinth, { GameNextFetch } from 'reducers/labyrinth';
import { ChildContainer } from '../styles/GlobalStyles'

const MazePage = () => {
  const dispatch = useDispatch();
  const description = useSelector((store) => store.labyrinth.status.description);
  const actions = useSelector((store) => store.labyrinth.status.actions);
  const coordinates = useSelector((store) => store.labyrinth.status.coordinates);
  const onTypeButtonClick = (type, direction) => {
    dispatch(GameNextFetch(type, direction));
  }
  const goToPreviousStatus = () => {
    dispatch(labyrinth.actions.setPreviousStatus())
  }
  return (
    <ChildContainer>
      <>
        <div>
          <p><button type="button" onClick={() => goToPreviousStatus()}>Go back</button></p>
        </div>
        <div>
          <h3>{description}</h3>
        </div>
        <div>
          <h3>Coordinates:</h3>
          <h3>
            {coordinates}
          </h3>
        </div>
        {actions && actions.map((singleType) => (
          <div key={singleType.description}>
            <p>{singleType.description}</p>
            <button onClick={() => onTypeButtonClick(singleType.type, singleType.direction)} type="button">{singleType.direction}</button>
          </div>
        ))}
      </>
    </ChildContainer>
  )
};

export default MazePage;