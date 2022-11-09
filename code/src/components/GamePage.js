/* eslint-disable max-len */
import React from 'react';
// import { maingame } from 'reducers/maingame';
import { useSelector } from 'react-redux';

export const GamePage = () => {
  const game = useSelector((store) => store.maingame.gameProps)

  return (
    <p>{game}</p>
  )
}

// Should this be on the startpage?
// Use .map over the different direction alternatives?

/* https://labyrinth.technigo.io/action
The button will dispatch the second fetch thunk which will do the coming fetches with the next set
of instructions to show the user: for this fetch we need to send an object including the username,
type="move" and the direction the user chose so we send that data as a prop to the reducer */