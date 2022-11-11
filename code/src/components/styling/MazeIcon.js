import React from 'react'
import styled from 'styled-components'
import Icon from 'images/maze.png'

const MazeIcon = () => {
  return (
    <Maze src={Icon} />
  )
}
export default MazeIcon

const Maze = styled.img`
    position: absolute;
    top: 30px;
    left: 30px;
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    @media (min-width: 1025px) {
        top: 45px;
        left: 47px;
      }
`