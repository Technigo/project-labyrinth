import React from 'react';
import styled from 'styled-components/macro';

function coordsToMap(coords) {
  // @TODO change to switch
  if (coords === '0,0') {
    return './assets/images/maze_1.svg'
  } else if (coords === '1,0') {
    return './assets/images/maze_2.svg'
  } else if (coords === '1,1') {
    return './assets/images/maze_3.svg'
  } else if (coords === '0,1') {
    return './assets/images/maze_4.svg'
  } else if (coords === '0,2') {
    return './assets/images/maze_5.svg'
  } else if (coords === '0,3') {
    return './assets/images/maze_6.svg'
  } else if (coords === '1,3') {
    return './assets/images/maze_7.svg'
  }
  return './assets/images/fallback.jpg'
}

const StyledMap = styled.img`
color: white;
width: 15%;
position: absolute;
top: 40px;
right: 40px;

@media (min-width: 667px) and (max-width: 1024px) {
   width: 100px;
  }

@media (min-width: 1025px) {
   width: 100px;
 }
`

const Map = ({ coordinates }) => {
  const MazeMap = coordsToMap(coordinates);

  return (
    <StyledMap src={MazeMap} alt="Map of maze" title="Your current position" />
  )
}

export default Map