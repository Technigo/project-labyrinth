import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { maze } from 'reducers/maze'
import FetchGame from './FetchGame'
import { Loading } from './Loading'

export const Start = () => {
  const currentLocation = useSelector((store) => store.maze)
  const [userName, setUserName] = useState('')

  const dispatch = useDispatch()

  const onNameSubmit = (event) => {
    event.preventDefault()
    dispatch(maze.actions.setUser(userName))
    dispatch(FetchGame())
  }
  if (currentLocation.isLoading) return <Loading />
  return (
    <div>
      <p>You have a burning ache in your throat
        as you emerge on the beach of the island.
        You remember the storm that sunk your ship,
        but do you remember your name, sailor?
      </p>
      <form onSubmit={(event) => onNameSubmit(event)}>
        <label htmlFor="name">
          <input type="text" id="name" onChange={(event) => setUserName(event.target.value)} />
          <button type="submit">Enter</button>
        </label>
      </form>
    </div>
  )
}
