import React from 'react';
import styled from 'styled-components/macro';
// import maze from './assets/images/maze_icon.svg';
import maze from './maze_icon.svg';

const StyledMazeLogo = styled.img`
 text-align: center;
 align-self: center;
 margin-top: 180px;
 width: 150px;
 margin-bottom: 60px;
`

const MazeLogo = () => {
  return (
    <StyledMazeLogo src={maze} alt="the maze" />
  )
}
export default MazeLogo;

