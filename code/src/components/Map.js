import React from 'react'
import { useSelector } from 'react-redux'
import "nes.css/css/nes.min.css"

const Map = () => {
  const game = useSelector((store) => store.game)

  let index = 0

	return (
    <div className="map-wrapper">
      <div className="map-border">
        {game.mapArray.map( row => {
          return row.map( square => {
            if (square.current) {
              index++
              return (
                <div key={index} className="grid-square-current">
                  <img 
                    className="player-icon" 
                    src="./assets/player-icon.png" 
                    alt="player-icon"
                  />
                  <div className="exit-north" style={{display: square.north ? 'block' : 'none'}}/>
                  <div className="exit-east" style={{display: square.east ? 'block' : 'none'}}/>
                  <div className="exit-south" style={{display: square.south ? 'block' : 'none'}}/>
                  <div className="exit-west" style={{display: square.west ? 'block' : 'none'}}/>
                </div>
              )
            } else if (square.visited) {
              index++
              return (
                <div key={index} className="grid-square-visited">
                  <div className="exit-north" style={{display: square.north ? 'block' : 'none'}}/>
                  <div className="exit-east" style={{display: square.east ? 'block' : 'none'}}/>
                  <div className="exit-south" style={{display: square.south ? 'block' : 'none'}}/>
                  <div className="exit-west" style={{display: square.west ? 'block' : 'none'}}/>
                </div>
              )
              } else {
                index++
                return ( 
                  <div key={index} className="grid-square-unvisited"></div>
                )
              }
          })})
        }
      </div>
    </div>  
	)
}

export default Map