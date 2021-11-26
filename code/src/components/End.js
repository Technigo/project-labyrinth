import React from 'react';
import { useDispatch } from 'react-redux';
import { start } from 'reducers/start';

import { EndPage, EndTitle, Gif, Button } from './StyledComponents';

export const End = ({ title, gameDescription }) => {
  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(start.actions.setRestartGame());
  };

  return (
    <>
      <EndPage>
        <div>
          <div>
            <EndTitle>{title}</EndTitle>
            <p>{gameDescription}</p>

            <Button onClick={onRestart}>Restart the game</Button>
          </div>
        </div>
        <Gif src='https://embed.lottiefiles.com/animation/53040'></Gif>
      </EndPage>
    </>
  );
};
