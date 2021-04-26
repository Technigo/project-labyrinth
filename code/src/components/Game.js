import React, { useState } from 'react'



const Game = () => {
  const [name, setName] = useState('')
  console.log(name)
  return (
    <div>
      This is the Game component!
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
    </div>
  )
}



export default Game
