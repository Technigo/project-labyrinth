import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { games, CarryOnGame } from '../reducers/games'

const GameScreen = ({ inputValue }) => {
  const [inputDirection, setInputDirection] = useState([])

  const userActions = useSelector(store => store.games.username)
  // console.log(userActions)

  const games = useSelector(store => store.games.username.actions)
  // const games = useSelector(store => store.games)
  console.log(games)

  const dispatch = useDispatch()

/*   const onNextDirection = () => {
    dispatch(games.actions.setInputDirection(inputDirection))
    dispatch(CarryOnGame(inputValue)) // ? 
  }  */

  //The optional chaining operator (?.) 
  //enables you to read the value of a property located deep within 
  //a chain of connected objects without having to check that each reference 
  //in the chain is valid.
  return (
    <div>
      <h3>{userActions.description}</h3>
        {games?.map( (game, index) => (
            <div key={index}>
              <p>{game.description}</p>
              <button
                  onClick={() => dispatch()}>
                      {game.direction}
              </button>
            </div>
          )
        )}
    </div>
  )
}

export default GameScreen