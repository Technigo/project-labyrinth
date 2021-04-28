import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from 'components/StartScreen'
import GameScreen from 'components/GameScreen'

const GameBoard = () => {
  const username = useSelector(store => store.games.username)
  const error = useSelector(store => store.games.error)
  const loading = useSelector(store => store.games.loading)
  

  return (
    <div>
      {error && `Something went wrong: ${error}`}
      {loading && 
        <lottie-player 
          src="https://assets6.lottiefiles.com/private_files/lf30_kanwuonz.json"  
          background="transparent"  
          speed="1"  
          style={{"width: 300px; height: 300px;"}}  
          loop controls autoplay>
        </lottie-player>
      }
      { username? <GameScreen /> : <StartScreen /> }
    </div>
  )
}

export default GameBoard
