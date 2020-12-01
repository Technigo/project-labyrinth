import React from 'react'
import { useSelector } from 'react-redux'


export const Description = () => {
  const description = useSelector(store => store.game.gameState.description)

  return (
    <div>{description}</div>
  )
}