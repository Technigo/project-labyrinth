/* eslint-disable max-len */
import React from 'react';
import { fetchGameStep } from 'reducers/maingame';
import { useSelector, useDispatch } from 'react-redux';

export const GamePage = () => {
  const gameProps = useSelector((store) => store.maingame.gameProps)
  const username = useSelector((store) => store.maingame.username);
  const actions = useSelector((store) => store.maingame.gameProps.actions);
  const dispatch = useDispatch()

  return (
    <section>
      <p>Greetings, {username}</p>
      <p>{gameProps.description}</p>
      {actions.map((action) => {
        return (
          <>
            <p>{action.description}</p>
            <button type="submit" onClick={() => dispatch(fetchGameStep(action.type, action.direction))}>{action.direction}</button>
          </>
        )
      })}

    </section>
  )
}

/*
The button will dispatch the second fetch thunk which will do the coming fetches with the next set
of instructions to show the user: for this fetch we need to send an object including the username,
type="move" and the direction the user chose so we send that data as a prop to the reducer

*/
