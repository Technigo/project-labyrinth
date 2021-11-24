import React from 'react';
import { useDispatch } from 'react-redux';
import { start } from 'reducers/start';

import { EndPage, EndTitle } from './StyledComponents';

export const End = ({ title, gameDescription }) => {
  // const username = useSelector(store => store.start.username);
  // const gameDescription = useSelector(store => store.start.description);

  const dispatch = useDispatch();

  const onRestart = () => {
    // dispatch(start.actions.setUsername(''));
    dispatch(start.actions.setRestartGame()); // skapade reducer så att vi kommer till startsidan, innan var sista bilden kvar och inputfältet endast tomt
  };

  return (
    <EndPage>
      <div>
        <div>
          <EndTitle>{title}</EndTitle>
          <p>{gameDescription}</p>

          <button onClick={onRestart}>Restart the game</button>
        </div>
      </div>
    </EndPage>
  );
};
