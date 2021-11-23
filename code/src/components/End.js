import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { start } from 'reducers/start';

export const End = () => {
  const username = useSelector(store => store.start.username);

  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(start.actions.setUsername(''));
  };

  return (
    <div>
      <div>
        <div>
          <h1>Well done {username}, you made it to the end!</h1>

          <button onClick={onRestart}>Restart the game</button>
        </div>
      </div>
    </div>
  );
};
