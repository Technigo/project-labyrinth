import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './components/Loading';
import { startLabyrinth, nextMove } from '../reducers/labyrinth';

const LabyrintActions = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.labyrinth.loading);
  const position = useSelector((state) => state.labyrinth.coordinates);
  const description = useSelector((state) => state.labyrinth.description);
  const actions = useSelector((state) => state.labyrinth.actions);

  const handleMove = (direction) => {
    dispatch(nextMove(direction));
  };

  useEffect(() => {
    dispatch(startLabyrinth());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h2>{position}</h2>
          <p>{description}</p>
          <ul>
            {actions.map((action) => (
              <li>
                <button type="button" onClick={() => handleMove(action.direction)}>{action.description}</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LabyrintActions;
