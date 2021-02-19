import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { rooms } from 'reducers/rooms'

export const CreateUsername = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState ("")

    const dispatchUsername = () => {
      console.log("Inside dispatchUsername")
      dispatch(rooms.actions.setUsername(username))
    }

    return (
      <div className="box-username">
            <input 
              type="text" 
              placeholder="What's your name?"
              value={username} 
              onChange={event => setUsername(event.target.value)}
            />
            <button 
              type="button" 
              disabled={username.length < 1} 
              onClick={dispatchUsername}
            >
              Confirm
            </button>
        </div>
    )
}