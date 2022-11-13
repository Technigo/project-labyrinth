import React from 'react'
import { useSelector } from 'react-redux'

const Summary = () => {
  const location = useSelector((store) => store.game.location) // completed actions

  const restart = () => {
    window.location.reload();
  }
  return (
    <>
      <h2>TOTAL OF ROAD BUMPS</h2>
      {
        location.map((item) => {
          return (
            <div>{item.direction}</div>
          )
        })
      }
      <button
        type="button"
        onClick={restart}>Restart
      </button>

    </>
  )
}

export default Summary