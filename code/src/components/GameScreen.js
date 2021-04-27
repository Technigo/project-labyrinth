import React from 'react'
import { useSelector } from 'react-redux'

const GameScreen = () => {
  const userActions = useSelector(store => store.games.username)
  // console.log(userActions)

  const games = useSelector(store => store.games.username.actions)
  // const games = useSelector(store => store.games)
  console.log(games)


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
              <button>{game.direction}</button>
            </div>
          )
        )}
    </div>
  )
}

export default GameScreen