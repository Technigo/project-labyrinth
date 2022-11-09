import React from 'react';
import { useSelector } from 'react-redux';
// import AuthorInputSearch from './AuthorInputSearch';
import Player from './Player'

const StartScreen = () => {
  const description = useSelector((store) => store.game.description);
  console.log('Check', description)

  return (
    <>
      <p>{description}</p>
      <Player />
    </>

  )
}

export default StartScreen;
