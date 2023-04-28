/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import UserNameInput from './UserNameInput';
import { LoadingMaze } from './LoadingIndicator';
import { GameBoard } from './GameBoard';

const Main = () => {
  const isLoading = useSelector((store) => store.ui.isLoading);
  const username = useSelector((store) => store.game.username);
  const coordinates = useSelector((store) => store.game.coordinates);
  let imageUrl;

  if (coordinates === '0,0') {
    imageUrl = 'https://i.postimg.cc/pV8sx0sd/maze-1.png';
  } else if (coordinates === '0,1') {
    imageUrl = 'https://i.postimg.cc/bJS3ZL83/maze-4.png';
  } else if (coordinates === '0,2') {
    imageUrl = 'https://i.postimg.cc/9FY1wD55/maze-5.png';
  } else if (coordinates === '0,3') {
    imageUrl = 'https://i.postimg.cc/RVBX0cYL/maze-6.png';
  } else if (coordinates === '1,0') {
    imageUrl = 'https://i.postimg.cc/52P3pD2s/maze-2.png';
  } else if (coordinates === '1,1') {
    imageUrl = 'https://i.postimg.cc/Gt0zGYmr/maze-3.png';
  } else if (coordinates === '1,3') {
    imageUrl = 'https://i.postimg.cc/Dz8cN5Wn/maze-7.png';
  } else {
    imageUrl = 'https://i.postimg.cc/x1j5v9nk/maze-intro.png';
  }

  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }}>
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
