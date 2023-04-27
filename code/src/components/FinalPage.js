// eslint-disable-next-line max-len
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux'

export const FinalPage = () => {
  const game = useSelector((store) => store.game.gameStep)
  const username = useSelector((store) => store.game.username)

  return (
    <>
      <header>Here we can put a styled header with something nice congratulating the user with {username}</header>
      <p>{game.description}</p>
      {/* <button /> */}
    </>
  )
}