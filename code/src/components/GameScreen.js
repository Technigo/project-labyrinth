import React from 'react'
import { useSelector } from 'react-redux'



const GameScreen = () => {
  const actions = useSelector(store => store.games.actions)
  // const description = useSelector(store => store.games.games.description)
  
  

  console.log(actions)
  return (
    <div> 
      <h3>This is a description: {actions.description}</h3> 
    
      
    </div>

  )
}

export default GameScreen