import React from 'react' 
import { useSelector } from 'react-redux'

const StartScreen = () => {
  const name = useSelector(store => store.games.username)
  
  return (
    <div>
      <p>Hi you: {name}</p>
    </div>
  )
}

export default StartScreen 