// eslint-disable-next-line max-len
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

export const FinalPage = () => {
  const gameSteps = useSelector((store) => store.game.gameSteps)
  const username = useSelector((store) => store.game.username)

  return (
    <>
      <header>Here we can put a styled header with sometinng nice congratulating the user with {username}</header>
      <p>{gameSteps.description}</p>
      {/* <button /> */}
    </>
  )
}