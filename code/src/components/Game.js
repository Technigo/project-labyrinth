/* eslint-disable react/button-has-type */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAction } from 'reducers/game';

const Game = () => {
  const { description, coordinates /* , actions  */ } = useSelector(
    (store) => store.game.currenPosition
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
      <p>{coordinates}</p>
      <p>{description}</p>
      <Card />
    </>
  )
}

export default Game;