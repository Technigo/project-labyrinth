import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideStartScreen } from 'reducers/game';
import UserName from './StartScreen';
import Game from './Game';
import BackgroundImage from './BackgroundImage';

const Screen = () => {
  const dispatch = useDispatch();
  const isStartScreen = useSelector((store) => store.game.isStartScreen);

  const handleUserNameSubmitted = () => {
    dispatch(hideStartScreen());
  };

  return (
    <section>
      <BackgroundImage />
      {isStartScreen && <UserName onUserNameSubmitted={handleUserNameSubmitted} />}
      {!isStartScreen && <Game />}
    </section>
  );
};

export default Screen;