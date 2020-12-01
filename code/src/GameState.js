import React from 'react'
import { useSelector } from 'react-redux'
import { Action } from "./components/Action"
 
export const GameState = () => {

  const username = useSelector((store) => store.game.username);
  const description = useSelector((store) => store.game.gameState.description);
  const coordinates = useSelector((store) => store.game.gameState.coordinates);
  const actions = useSelector((store) => store.game.gameState.actions);

  return (
    <div>

      <p>{username && username}</p>
      <p>{description && description}</p>
      <p>{coordinates && coordinates}</p>

      {actions && actions.map(action => {
        return (
          <Action key={action.description} props={action} /> 
        )
      })}

    </div>
  )
}

