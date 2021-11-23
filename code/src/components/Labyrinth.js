import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLabyrinth } from '../reducers/labyrinth';
import { labyrinth } from '../reducers/labyrinth';

const Labyrinth = () => {
  const labyrinth = useSelector((store) => store.labyrinth.destination);
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(fetchLabyrinth());
      }}
    >
      Start Labyrinth-Game!
    </button>
  );
};

export default Labyrinth;
