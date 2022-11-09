import React from 'react';
import { useSelector } from 'react-redux';

const GameScreen = () => {
  const response = useSelector((state) => state.game.response);

  return (
    <>
      <p>{response.description}</p>
      {/* {game.actions.map((item) => {
        return <button type="button">{item.directions}</button>;
      })} */}
      <button type="button"> test 2</button>
    </>
  );
};

export default GameScreen;
