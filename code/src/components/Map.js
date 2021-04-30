import React from 'react'
import { useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"

const Map = () => {
  const game = useSelector((store) => store.game)

  let index = 0

	return (
      <div className="map-wrapper">
        {game.mapArray.map( row => {
          return row.map( square => {
            
            switch(square) {
              case 0:
                index++
                return <div key={index} className="grid-square-unvisited"></div>
              case 1:
                index++
                return <div key={index} className="grid-square-visited"></div>
              case 2:
                index++
                return (
                  <div key={index} className="grid-square-current">
                    <img className="player-icon" src="./assets/player-icon.png" alt="player-icon"/>
                  </div>
                )
              default:
                return <div key={index} className="grid-square-error"></div>
            }
          })})
        }
      </div>  
	)
}

export default Map