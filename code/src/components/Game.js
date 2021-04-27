import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { game } from '../reducers/game'



const Game = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const onUserNameSet = () => {
      dispatch(game.actions.setUserName(name))
  }

  return (
    <div>
      This is the Game component!
      <form>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
        <button
          onClick={onUserNameSet()}
        >
          Submit
        </button>
      </form>
    </div>
  )
}



export default Game
