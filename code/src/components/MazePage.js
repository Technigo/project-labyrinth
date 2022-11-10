/* eslint-disable max-len */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import labyrinth, { GameNextFetch } from 'reducers/labyrinth';

const MazePage = () => {
  const dispatch = useDispatch();
  const { description, actions, coordinates } = useSelector((store) => store.labyrinth.status);
  // const type = useSelector((store) => store.labyrint.location.type);
  const onTypeButtonClick = (type, direction) => {
    dispatch(GameNextFetch(type, direction));
  }
  const goToPreviousStatus = () => {
    dispatch(labyrinth.actions.setPreviousStatus())
  }
  // const Card = ({ type, direction }) => (
  //   <div>
  //     <h3>blabla</h3>
  //     <p><button type="button" onClick={() => goToPreviousQuote(type, direction)}>  {type} {direction}</button></p>
  //   </div>
  // );
  return (
    <>
      <div>
        <p><button type="button" onClick={() => goToPreviousStatus()}>Go back</button></p>
      </div>
      <div>
        <h3>This is the direction!{description}</h3>
      </div>
      <div>
        <h3>Coordinates:</h3>

        <h3>
          {coordinates}
        </h3>
      </div>

      {actions && actions.map((singleType) => {
        return (
          <div key={singleType.description}>
            <p>{singleType.description}</p>
            <button onClick={() => onTypeButtonClick(singleType.type, singleType.direction)} type="button">{singleType.direction}</button>

          </div>
        );
      })}
    </>
  )
};

export default MazePage;