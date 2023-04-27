import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

export const LoadingMaze = () => {
  return (
    <div className="Maze-container">
      <Player
        loop
        autoplay
        src="https://assets8.lottiefiles.com/packages/lf20_jpasoh0f.json"
        className="lottie"
        speed={1} />
    </div>
  )
}