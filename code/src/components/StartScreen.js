import React from 'react';
import { useSelector } from 'react-redux';
import { InnerWrapper, OuterWrapper } from './styling/GlobalWrappers';
import GameBoard from './GameBoard';
import { UserNameInput } from './UserNameInput';
import LoadingAnimation from './LoadingAnimation';

const StartScreen = () => {
  const gameStart = useSelector((store) => store.labyrinth.username);
  const isLoading = useSelector((store) => store.ui.isLoading);
  return (
    <OuterWrapper>
      <InnerWrapper>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <>{gameStart === '' ? <UserNameInput /> : <GameBoard />} </>
        )}
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default StartScreen;
