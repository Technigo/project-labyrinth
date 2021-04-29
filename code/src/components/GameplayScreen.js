import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"

import game, { advance } from '../reducers/game'
import StartScreen from './StartScreen'
import ProgressBar from './ProgressBar'
import RoomDescription from './RoomDescription'
import Actions from './Actions'
import Map from './Map'

const GameplayScreen = () => {

  const room = useSelector((store) => store.game)
  const loadProgress = useSelector((store) => store.game.loadProgress)
  //console.log(room)

  return (
    <>
      { room.description === "" 
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
            <Map />
          </div>
      }    
    </>
  )  
}

{/* <h3 style={{color: "#f7f7f7", backgroundColor: "#212529"}}>THE LABYRINTH</h3> */}
export default GameplayScreen