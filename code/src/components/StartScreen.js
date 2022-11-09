import React from 'react';
import { useSelector } from 'react-redux';
import { Gameplay } from './Gameplay';
import { UsernameInput } from './UsernameInput';

export const StartScreen = () => {
  const username = useSelector((store) => store.game.username);

  return <div>{username === '' ? <UsernameInput /> : <Gameplay />}</div>
}