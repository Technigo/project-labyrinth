import React from 'react';
import styled from 'styled-components/macro'

const StyledHeader = styled.h1`
 text-align: center;
 font-size: 2.5em;
`

const Header = () => {
  return (
    <StyledHeader>The Maze</StyledHeader>
  )
}
export default Header;