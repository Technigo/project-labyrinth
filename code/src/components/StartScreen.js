import React from 'react';
import { useSelector } from 'react-redux';
import GameBoard from 'components/GameBoard';
import UsernameInput from 'components/UsernameInput';

const StartScreen = () => {
  const username = useSelector((store) => store.game.username);

  return <div>{username ? <GameBoard /> : <UsernameInput />}</div>;
};

export default StartScreen;
