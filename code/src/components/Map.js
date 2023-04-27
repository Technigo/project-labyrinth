import React from 'react';
import map00 from 'images/map-maze-00.png'
import map10 from 'images/map-maze-1.0.png'
import map11 from 'images/map-maze-1.1.png'
import map01 from 'images/map-maze-0.1.png'
import map02 from 'images/map-maze-0.2.png'
import map03 from 'images/map-maze-0.3.png'
import map13 from 'images/map-maze-1.3.png'
import map from 'images/map-maze.png'

const coordsMap = (coords) => {
  if (coords === '0,0') {
    return map00
  } else if (coords === '1,0') {
    return map10
  } else if (coords === '1,1') {
    return map11
  } else if (coords === '0,1') {
    return map01
  } else if (coords === '0,2') {
    return map02
  } else if (coords === '0,3') {
    return map03
  } else if (coords === '1,3') {
    return map13
  }
  return map
}

const Map = ({ coordinates }) => {
  const MazeMap = coordsMap(coordinates)

  return (
    <img src={MazeMap} alt="Map of maze" />
  )
}

export default Map;