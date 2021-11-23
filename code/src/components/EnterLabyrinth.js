import React from 'react'
import { useDispatch } from 'react-redux'

import { generateGame } from '../reducers/labyrinth'

export const EnterLabyrinth = () => {
  /* const [username, setUsername] = useState(''); */
  const dispatch = useDispatch()

  return (
    <>
    <h1>The Labyrinth</h1>
    <button
      type="submit"
      onClick={() => {
        dispatch(generateGame())
      }}
      >
        Enter
      </button>
      </>
  )
}