import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import labyrinth from 'reducers/labyrinth'

const StartScreen = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onNameSelect = () => {
    dispatch(labyrinth.actions.setUserName(value))
    fetch(`https://labyrinth-technigo.herokuapp.com/start?username${value}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }

  return (
    <div>
      <p>Welcome to the Red Riding Hood-game!</p>
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
