/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAction } from 'reducers/game';

const Game = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );

  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(fetchAction(type, direction));
  };

  const Card = ({ type, direction }) => (
    <div>
      <p>{description}</p>
      <button onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </button>
    </div>
  );

  return (
    <><p>Hi!</p>
      <p>Coordinates: {coordinates}</p>
      <p>{description}</p>
      {actions.length > 0
            // eslint-disable-next-line react/jsx-props-no-spreading
            && actions.map((item) => <Card key={item.direction} {...item} />)}
    </>
  )
}

export default Game;