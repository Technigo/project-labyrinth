import React from 'react'
import { useDispatch } from 'react-redux'

import { startGame } from 'reducers/labyrinth'

export const EnterLabyrinth = () => {
  /* const [username, setUsername] = useState(''); */
  const dispatch = useDispatch()

  return (
    <>
    <h1>The Labyrinth</h1>
    <button
      type="submit"
      onClick={() => {
        dispatch(startGame())
      }}
      >
        Enter the Labyrinth
      </button>
      </>
  )
}