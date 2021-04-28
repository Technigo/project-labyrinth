import React from 'react'
import { useSelector } from 'react-redux'

const MovieHistory = () => {
  const history = useSelector(store => store.games.history)

  return (
    <>
    <h1>You turned:</h1>
      {history.map((option) => (
        <div>
          <p>{option}</p>
        </div>
      ))}
    </>
  )

}

export default MovieHistory