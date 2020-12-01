import React from 'react'
import { useSelector } from 'react-redux'

export const ActionList = () => {

  const actions = useSelector(store => store.game.gameState.actions)

  const onAction = () => {
  }

  return (
    <>
      {actions.map(item => {
        return (
          <>
            <p>{item.description}</p>
            <button onClick={onAction}>Go {item.direction}</button>
          </>
        )
      })}
    </>
  )
}