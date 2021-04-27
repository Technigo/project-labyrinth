import React, { useState } from 'react'

import { directions, fetchData } from '../reducers/directions'

import { useDispatch } from 'react-redux'

const StartScreen = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const onInputChange = (event) => {
    setName(event.target.value)
  }

  const onBtnClick = () => {
    dispatch(directions.actions.setPlayer(name))
    dispatch(fetchData())
  }

  return (
    <div>
      <p>Please enter your name!</p>
      <input type="text" value={name} onChange={onInputChange} />
      <button type="button" onClick={onBtnClick}>Click here</button>
    </div>
  )
}

export default StartScreen