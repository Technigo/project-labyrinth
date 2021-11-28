import React from 'react'
import { useSelector } from 'react-redux'
import Lottie from 'react-lottie'

import start from '../lotties/start00'
import yellow from '../lotties/yellow10'
import red from '../lotties/red11'
import lime from '../lotties/lime01'
import purple from '../lotties/purple02'
import orange from '../lotties/orange03'
import end from '../lotties/end13'

const GameCharacter = () => {
  const coordinates = useSelector(
    (store) => store.game.currentCoordinates.coordinates
  )

  // change game character according to current coordinates
  const showGameCharacter = () => {
    switch (coordinates) {
      case '0,0':
        return start
      case '1,0':
        return yellow
      case '1,1':
        return red
      case '0,1':
        return lime
      case '0,2':
        return purple
      case '0,3':
        return orange
      case '1,3':
        return end
      default:
        return start
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: showGameCharacter(),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  )
}

export default GameCharacter
