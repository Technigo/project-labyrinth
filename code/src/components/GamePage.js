import React from 'react';
import { useSelector } from 'react-redux';

export const GamePage = () => {
  const actions = useSelector((store) => store.game.location.actions);

  return (
    <p>
       Description: {actions.description}
    </p>
  )
}