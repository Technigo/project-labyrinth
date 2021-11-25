import React from 'react';
import { useDispatch } from 'react-redux';
import { start } from 'reducers/start';

import { EndPage, EndTitle, Gif, Button } from './StyledComponents';

export const End = ({ title, gameDescription }) => {
  // const username = useSelector(store => store.start.username);
  // const gameDescription = useSelector(store => store.start.description);

  const dispatch = useDispatch();

  const onRestart = () => {
    // dispatch(start.actions.setUsername(''));
    dispatch(start.actions.setRestartGame()); // skapade reducer så att vi kommer till startsidan, innan var sista bilden kvar och inputfältet endast tomt
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
