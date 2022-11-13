import React from 'react';
import styled from 'styled-components/macro';
// import maze from './assets/images/maze_icon.svg';
import maze from './maze_icon.svg';

const StyledHeader = styled.h1`
 text-align: center;
 display: flex;
justify-content: center;
 font-size: 2.5em;
 margin-top: 180px;
 .maze{
width: 150px;
margin-bottom: 60px;
 }
`

const Header = () => {
  return (
    <StyledHeader><img className="maze" src={maze} alt="the maze" /></StyledHeader>
  )
}
export default Header;

