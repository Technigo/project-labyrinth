import React from 'react'
import { useDispatch } from 'react-redux'


import ActionButton from './ActionButton'
import ActionDescription from './ActionDescription'

const Action = ({ direction, description, type, chosenDirection, setChosenDirection }) => {
  console.log(direction, chosenDirection)
  return (
    <div>
      {/* <ActionDescription description={description} />
      <ActionButton direction={direction} type={type} /> */}

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
      {/* {direction === chosenDirection && <p>{description} </p>} */}
    </div>
  )
}
export default Action
