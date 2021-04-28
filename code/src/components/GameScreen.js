import React from 'react'
import { useSelector } from 'react-redux'

const GameScreen = () => {
  const description = useSelector(store => store.games.description)
  // const direction = useSelector(store => store.games.actions.direction)

  return (
  <div> 
    <h3>This is a description: {description}</h3>
    {/* {actions.direction.map(direction => (
      <button key={direction}>{direction}</button> */}
    ))}

  
  </div>

  )
}

export default GameScreen