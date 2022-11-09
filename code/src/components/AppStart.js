import React from 'react';
import { useSelector } from 'react-redux';
import { Gameplay } from './Gameplay';
import { Username } from './Username';

export const AppStart = () => {
  const username = useSelector((store) => store.game.username);

  return <div>{username === '' ? <Username /> : <Gameplay />}</div>
}