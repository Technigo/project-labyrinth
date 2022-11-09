/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAction } from 'reducers/game';
import LastPage from './LastPage';

const Game = () => {
  const { description, coordinates, actions } = useSelector(
    (store) => store.game.currentPosition
  );

  const dispatch = useDispatch();

  const handleButtonClick = (type, direction) => {
    dispatch(fetchAction(type, direction));
    console.log('test')
  };

  const Card = ({ type, direction }) => (
    <div>
      <p>{description}</p>
      <button
        onClick={() => handleButtonClick(type, direction)}>
        {type}
        {direction.toLowerCase()}
      </button>
    </div>
  );

  return (
    <div>
      <div>
        <p>Coordinates: {coordinates}</p>
        <p>{description}</p>
        {actions.length === 0 && <LastPage />}
        {actions.length > 0
            && actions.map((item) => <Card
              key={item.direction}
              {...item} />)}
      </div>
    </div>
  )
}

export default Game;