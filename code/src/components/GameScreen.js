import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import "nes.css/css/nes.min.css";

import Action from './Action'
import ActionButton from './ActionButton'
import RestartButton from './RestartButton'

const GameScreen = () => {
  const [chosenDirection, setChosenDirection] = useState("")
  const gameState = useSelector(store => store.game.gameState)

  const chosenAction = gameState.actions.filter(action => action.direction === chosenDirection)

  // sets image source path depending on coordinates
  const setImagePath = () => {
    if (gameState.coordinates === "0,0") return "./assets/archway.png"
    else if (gameState.coordinates === "1,0") return "./assets/bridge.png"
    else if (gameState.coordinates === "1,1") return "./assets/path.png"
    else if (gameState.coordinates === "0,1") return "./assets/gear.png"
    else if (gameState.coordinates === "0,2") return "./assets/gears.png"
    else if (gameState.coordinates === "0,3") return "./assets/scroll.png"
    else return "./assets/sun.png"
  }

  // these are the coordinates for the map, booleans because the class names depend on them
  // 2 dimensional array of 4x2 (rows x columns)
  const mapTilesArray = [
    [false, false],
    [false, false],
    [false, false],
    [false, false]
  ]

  // creates divs with class names depending on coordinates, 16 in total, 4 x 4
  // the eight tiles in the middle can change class name
  // e.g. our gameState.coordinates is "0,1" which should result in:
  //                  col[0]   col[1]
  // row[3]: | black | black | black | black |
  // row[2]: | black | black | black | black |
  // row[1]: | black | black | black | black |
  // row[0]: | black | black | white | black |
  const createMapTiles = () => {
    let mapTiles = []
    // for-loop over rows (in backward direction so that first is at bottom)
    for (let i = 3; i > -1; i--) {
      mapTiles.push(<div className="black map-tile"></div>)
      // for-loop for columns
      for (let j = 0; j < 2; j++) {
        mapTiles.push(<div className={`map-tile ${mapTilesArray[i][j] ? "white" : "black"}`}></div>)
      }
      mapTiles.push(<div className="black map-tile"></div>)
    }
    return mapTiles
  }

  // sets the current map tile to true, which triggers a class name change
  const setMapTile = (coords) => {
    const ordinates = coords.split(",")
    mapTilesArray[Number(ordinates[1])][Number(ordinates[0])] = true
  }

  // runs the above function with the current coordinates
  setMapTile(gameState.coordinates)

  return (
    <div className="nes-container is-rounded is-dark game-screen">

      <div className="action-container">
        <p><img src={setImagePath()} className="icon" alt="icon" />{gameState.description}</p>

        {gameState.coordinates !== "1,3" && <p>What do you do?</p>}
        {gameState.coordinates === "1,3" && <RestartButton />}

        {gameState.actions.map(action =>
          <Action
            direction={action.direction}
            key={action.description}
            chosenDirection={chosenDirection}
            setChosenDirection={setChosenDirection} />)}

        {chosenAction[0] !== undefined && <p className="description">{chosenAction[0].description}</p>}

        {chosenDirection && <ActionButton chosenDirection={chosenDirection} />}
      </div>

      <div className="nes-container is-rounded is-dark map-container">
        <div className="map-grid">
          {createMapTiles()}
        </div>
      </div>
    </div >
  )
}
export default GameScreen