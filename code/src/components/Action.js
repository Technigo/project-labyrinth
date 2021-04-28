import React from 'react'
import { useDispatch } from 'react-redux'


import ActionButton from './ActionButton'
import ActionDescription from './ActionDescription'

const Action = ({ direction, chosenDirection, setChosenDirection }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          className="nes-radio"
          name="answer"
          onChange={(event) => setChosenDirection(event.target.value)}
          value={direction}
        />
        <span>{direction}</span>
      </label>
    </div>
  )
}
export default Action
