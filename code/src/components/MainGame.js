import React from 'react';
import { useSelector } from 'react-redux';
import { game } from '../reducers/game';

const MainGame = () => {
  const gameObject = useSelector((store) => store.game.gameObject);
  console.log(gameObject);

  return (
    <div>
      <h1>{gameObject.description}</h1>
      <p>{gameObject.coordinates}</p>
      {gameObject.actions.map((item) => (
        <div key={item.direction}>
          <p>{item.description}</p>
          <button

          // onClick={() =>
          //   dispatch(fetchGameInstructions({ direction: item.direction }))
          // }
          >
            {item.direction}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainGame;
