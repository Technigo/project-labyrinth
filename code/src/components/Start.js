import React from "react"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { gamereducer, generateQuestion } from "reducers/gamereducer"

const Start = () => {
  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch()

  const onUiSet = () => {
    dispatch(gamereducer.actions.setUi(inputValue))
    dispatch(generateQuestion())
  }

  return (
    <div>
      <p>Welcome to the Maze game</p>
      &nbsp;
      <input
        type='text'
        placeholder='Type your name'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      &nbsp;
      <button onClick={onUiSet}>Start the game</button>
    </div>
  )
}

export default Start
