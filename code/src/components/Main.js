/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import UserNameInput from './UserNameInput';
import { LoadingMaze } from './LoadingIndicator';
import { GameBoard } from './GameBoard';

const Main = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  const username = useSelector((store) => store.game.username);

  return (
    <div>
      {isLoading ? (
        <LoadingMaze />
      ) : username ? (
        <GameBoard />
      ) : (
        <section className="start-section">
          <h1>You are now entering the labyrinth so beware and tred carefully</h1>
          <h2>The Labyrinth</h2>
          <UserNameInput />
        </section>
      )}
    </div>
  )
};

export default Main;