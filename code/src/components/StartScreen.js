import React from 'react';
import { useSelector } from 'react-redux';
import { Gameplay } from './Gameplay';
import { UsernameInput } from './UsernameInput';

export const StartScreen = () => {
  const progress = useSelector((store) => store.game.progress);

  return <div>{progress === '' ? <UsernameInput /> : <Gameplay />}</div>
}