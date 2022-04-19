import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import labyrinth from './reducers/labyrinth'

const StartScreen = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onName = () => {
    dispatch(labyrinth.actions.setUserName(value))
    fetch(`https://labyrinth-technigo.herokuapp.com/start?username${value}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
  }
}

export default StartScreen
