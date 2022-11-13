import React from 'react';
import styled from 'styled-components/macro';

const StyledMazeLogo = styled.img`
 margin-top: 180px;
 width: 150px;
 margin-bottom: 60px;
`

const MazeLogo = () => {
  return (
    <StyledMazeLogo src="./assets/images/maze_icon.svg" alt="the maze" />
  )
}
export default MazeLogo;

