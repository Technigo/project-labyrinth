import React from 'react'
import { useSelector } from 'react-redux'

const GameScreen = () => {
  const userActions = useSelector(store => store.games.username)
  // console.log(userActions)
  
  const games = useSelector(store => store.games.username.actions)
  console.log(games)

  return (
    <div>
      <h3>{userActions.description}</h3>
      {/* <p>{games.description}</p> */}
{/*         {userActions.map(action => (
          <button
            key={action}  
            onClick=""
          >
              {action}
          </button>
      ))} */}
    </div>
  )
}

export default GameScreen