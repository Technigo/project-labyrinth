import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { games, CarryOnGame } from '../reducers/games'

const GameScreen = ({ inputValue }) => {

  const userName = useSelector(store => store.games.username)
  // console.log(userActions)

  const actions = useSelector(store => store.games.username.actions)
  // const games = useSelector(store => store.games)
  console.log(actions)

  const dispatch = useDispatch()

  const onNextDirection = (direction) => {dispatch(CarryOnGame(direction))}

  //The optional chaining operator (?.) 
  //enables you to read the value of a property located deep within 
  //a chain of connected objects without having to check that each reference 
  //in the chain is valid.
  return (
    <div>
      <h3>{userName.description}</h3>
        {actions?.map( (action, index) => (
            <div key={index}>
              <p>{action.description}</p>
              <button
                  onClick={onNextDirection()}>
                      {action.direction}
              </button>
            </div>
          )
        )}
    </div>
  )
}

export default GameScreen