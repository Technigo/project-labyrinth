import React from 'react'

import { useSelector } from 'react-redux'

export const RoomList = () => {

  const game = useSelector (
    (store) => store.game.game)

  console.log(game) // REMOVE LATER

  return (
    <p>{game.username}</p>
  )
}

