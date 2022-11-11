/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-shadow */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep } from '../reducers/labyrinth';
// import { labyrinth } from '../reducers/labyrinth';

const Labyrinth = () => {
  const { description, actions } = useSelector((store) => store.labyrinth.currentPosition)
  const dispatch = useDispatch()
  const handleButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction));
  };

  const PlayGame = ({ description, type, direction }) => (
    <div>
      <p>{description}</p>
      <button
        type="button"
        onClick={() => handleButtonClick(type, direction)}>
        {type} {direction}
      </button>
    </div>
  );

  return (
    <div>
      <section>
        <h2>{description}</h2>
        {actions.length === 0 && <h3>Great job, you survived!</h3>}
        {actions.length > 0
          && actions.map((game) => (
            <PlayGame key={game.direction} {...game} />
          ))}
      </section>
    </div>
  );
};

export default Labyrinth;