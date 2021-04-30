import React from 'react'
import { useDispatch } from 'react-redux'

import gameactions from '../reducers/gameactions'

const Summary = () => {
  const dispatch = useDispatch()

  const onStartOver = () => {
    dispatch(gameactions.actions.setGamestart(null))
  }
  return (
    <div className='fade-in'>
      <h1>You have reached the end!</h1>
      <button
        onClick={onStartOver}
      >
        Start over
      </button>
    </div>
  )
}

export default Summary
