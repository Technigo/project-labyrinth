import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchGameStart } from 'reducers/maingame';

/* const onNameSubmit = (name) => {
  dispatchEvent(maingame.actions.setUsername(name))
} */

export const StartPage = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="submit"
      onClick={() => { dispatch(fetchGameStart) }}> Start
    </button>
  )
}
