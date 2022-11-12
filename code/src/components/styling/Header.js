import React from 'react'
import Lottie from 'lottie-react'
import maze from 'lotties/maze'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderContainer>
      <MazeWrapper>
        <Lottie animationData={maze} loop />
      </MazeWrapper>
      <Heading>Labyrinth</Heading>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  color: white;
  width: 100vw;
  height: 12vh;
  overflow: hidden;
`

const MazeWrapper = styled.div`
  position: absolute;
  top:16px;
  left: 10px;
  width: 80px;
`

const Heading = styled.h1`
  text-align: center;
  line-height: 48px;
`