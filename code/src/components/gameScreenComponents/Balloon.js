import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components/macro'

const Balloon = () => {
  const description = useSelector((store) => store.maze.description)

  return (
    <Chat className='nes-balloon from-left'>
      <Text>
        {description}
      </Text>
    </Chat>
  )
}

export default Balloon

const Chat = styled.div`
  width: 90%;
  margin: 0 0 50px 0;
    @media (min-width: 768px) {
      width: 50%;
      margin: 0 0 80px 0;
    }
    @media (min-width: 1025px) {
      width: 40%;
      margin: 0 0 60px 0;
    }
`
const Text = styled.p`
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
    @media (min-width: 768px) {
      font-size: 16px;
    }
`