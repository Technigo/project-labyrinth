import React from 'react'
import Lottie from 'lottie-react'
import maze from 'lotties/maze'
import styled from 'styled-components'

const MazeIcon = () => {
  return (
    <MazeWrapper>
      <Lottie animationData={maze} loop />
    </MazeWrapper>
  )
}

export default MazeIcon

const MazeWrapper = styled.div`
    position: absolute;
    top: 30px;
    left: 10px;
    width: 80px;
    @media (min-width: 819px) {
        top: 55px;
        left: 47px;
        width: 120px;
      }
`