import React from 'react'
import styled from 'styled-components'
import decorative from 'styling/lib/decorative.svg'

const HeaderBlock = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #8A2BE2;

`
const HeaderLogo = styled.img`
  margin: 20px;
  width: 200px;
  height: 100vh;
`

export const Header = () => {
  return(
  <HeaderBlock>
    <HeaderLogo src={decorative} alt="mandala" />
  </HeaderBlock>
  )
};