import React from 'react'

const Action = ({ direction, setChosenDirection }) => {
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
        <span>Look {direction}</span>
      </label>
    </div>
  )
}
export default Action
