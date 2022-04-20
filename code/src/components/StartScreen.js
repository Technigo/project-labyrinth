import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import labyrinth from 'reducers/labyrinth'

const StartScreen = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onNameSelect = () => {
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: value
      })
    }
    dispatch(labyrinth.actions.setUserName(value))
    fetch('https://labyrinth-technigo.herokuapp.com/start', options)
      .then((res) => res.json())
      .then((username) => console.log(username))
  }

  return (
    <div>
      <p>Welcome to the labyrinth!</p>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={onNameSelect}>Start the game!</button>
    </div>
  )
}

export default StartScreen
