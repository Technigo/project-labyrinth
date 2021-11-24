import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStepThunk } from 'reducers/labyrinthSlice';

export const Labyrinth = () => {
  const dispatch = useDispatch();
  const { description, coordinates, actions } = useSelector(store => store.labyrinthSlice.currentPosition)

  const nextStep = (type, direction) => {
    dispatch(nextStepThunk(type, direction));
  };

  const UserActions = ({ description, type, direction }) => (
    <div>
      <p>{description}</p>
      <button onClick={() => nextStep(type, direction)}>
        {type} {direction}
      </button>
    </div>
  );

  return (
    <div>
      <h1>{description}</h1>
      <p>{coordinates}</p>
      {actions.length === 0 && <h1>Yay, you made it out!</h1>}
      {actions.lengt > 0 && actions.map((choice) => <UserActions key={choice.direction} {...choice} />)}
    </div>
  );
};
