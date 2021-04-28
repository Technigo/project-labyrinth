import React from 'react'
import { useSelector } from 'react-redux'

import game from '../reducers/game'

const InGame = () => {
//  const description = useSelector(store => store.direction.username)
 const direction = useSelector((store) => store.game.direction)

 console.log("test:", direction)

  return (
    <div>
        <p>{direction.description}</p>
  </div>
  )
}

export default InGame