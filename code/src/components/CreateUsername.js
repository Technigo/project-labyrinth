import React, { useState } from 'react'
import { useSelect, useDispatch } from 'react-redux'

import { rooms } from 'reducers/rooms'

export const CreateUsername = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState ("")

    const dispatchUsername = () => {
      console.log("Inne i dispatch username-funktionen")
      dispatch(
        rooms.actions.setUsername(username)
      )

    }

    return (
        <form>
            <input 
            type="text" 
            placeholder="What's your name?"
            value={username}
            onChange={event => setUsername(event.target.value)}
            />
            
            <button type="button" onClick={() => dispatchUsername()}>Start game: </button>


        </form>
        
    )
}