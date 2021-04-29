import React from 'react'
import { useSelector } from 'react-redux'

import game from 'reducers/game'

const InGame = () => {
  const direction = useSelector((store) => store.game.direction)
  



  return (
    <div>
        <p>test: {direction.description}</p>

  </div>
  )
}

export default InGame