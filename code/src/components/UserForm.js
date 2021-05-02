import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import labyrinth from '../reducers/labyrinth'
import { generateData } from '../reducers/labyrinth'

const UserForm = () => {
  const [userValue, setUserValue] = useState("")

  const dispatch = useDispatch()

  const onUserSet = () => {
    dispatch(labyrinth.actions.addUserName(userValue))
    dispatch(generateData())
  }
  return (
    <div className="form">
      <h1 className="greeting">Welcome, adventurer!</h1>
      <h2 className="name-question">What is your name?</h2>
      <input
        className="input-form"
        type="text"
        value={userValue}
        onChange={e => setUserValue(e.target.value)}
      />
      <button
        className="start-button"
        onClick={onUserSet}
      >
        Start!
      </button>
    </div>
  )
}
export default UserForm