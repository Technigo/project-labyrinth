import React, { useState } from 'react'

import { directions, fetchStart } from '../reducers/directions'

import NeonCat from './NeonCat'

import { useDispatch } from 'react-redux'

const StartScreen = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()

  const onInputChange = (event) => {
    setName(event.target.value)
  }

  const onBtnClick = () => {
    dispatch(directions.actions.setPlayer(name))
    dispatch(fetchStart())
  }

  return (
    <div className="nes-container with-title is-centered">
      <p className="title">NEON CAT GAME!</p>
      <NeonCat />
      <div className="nes-field">
        <label htmlFor="name_field">Please enter your name</label>
        <input 
          type="text" 
          id="name_field" 
          className="nes-input" 
          value={name} 
          onChange={onInputChange} 
        />
      </div>
      <button 
        type="button" 
        className="nes-btn" 
        onClick={onBtnClick}
      >
        Start!
      </button>
    </div>

   
  )
}

export default StartScreen