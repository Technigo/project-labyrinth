import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import game from '../reducers/game'

const UserName = () => {
    const [userName, setUserName] = useState('')
    
    const dispatch = useDispatch()

    //Changed naming to userName related
    const handleUserName = (event) => {
        event.preventDefault()
        dispatch(game.actions.setUserName(userName))
        console.log(userName)
    }
    //Changed to "form" cause the onClick  wasn't working
    return (
        <form onSubmit={handleUserName}>
          <p>Welcome our amazing game!</p>
            <input 
              type="text"
              value={userName}
              placeholder="Enter your name"
              onChange={event => setUserName(event.target.value)}
              className= "username-field"
              required
            />
            <button type="onSubmit">Start Game</button>
        </form>
    )
}

export default UserName
