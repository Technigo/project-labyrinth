import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGameSteps } from '../reducers/game';
import { game } from '../reducers/game';

const MainGame = () => {
  const gameObject = useSelector((store) => store.game.gameObject);
  const username = useSelector((store) => store.game.username);
  console.log(gameObject);

  const dispatch = useDispatch();

  return (
    <div>
      <p>User: {username}</p>
      <h1>{gameObject.description}</h1>
      <p>{gameObject.coordinates}</p>
      {gameObject.actions.map((item) => (
        <div key={item.direction}>
          <p>{item.description}</p>
          <button
            onClick={() =>
              dispatch(fetchGameSteps({ direction: item.direction }))
            }
          >
            {item.direction}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainGame;
