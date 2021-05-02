import React from 'react'
import { useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"

import StartScreen from './StartScreen'
import ProgressBar from './ProgressBar'
import RoomDescription from './RoomDescription'
import Actions from './Actions'
import Map from './Map'

const GameplayScreen = () => {
  const room = useSelector((store) => store.game)
  const loadProgress = useSelector((store) => store.game.loadProgress)

  return (
    <>
      {room.description === "" 
        ? <StartScreen /> 
        : <div className="game-screen-wrapper">
          <div className="nes-container is-dark with-title is-centered">
            <p className="title">THE LABYRINTH</p>
            {loadProgress < 100 
              ? <ProgressBar />
              : <RoomDescription />
            }
          </div>
          <Actions />
          <div className="nes-container is-dark with-title">
            <p className="title">MAP</p>
            <Map />
          </div>
        </div>
      }    
    </>
  )  
}

export default GameplayScreen