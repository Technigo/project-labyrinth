import React from 'react';
import { useSelector } from 'react-redux';
// import { game } from 'reducer/game';

export const GamePage = () => {
  const description = useSelector((store) => store.game.location);
  console.log(description)
  return (
    <p key={description.description}>
      DESCRIPTION: {description.description}
    </p>
  )
}