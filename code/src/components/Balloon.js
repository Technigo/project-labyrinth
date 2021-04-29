import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Balloon = () => {
    const description = useSelector((store) => store.maze.description);

    return (
        <Chat className="nes-balloon from-left">
            <Text>
                {description}
            </Text>
        </Chat>
    )
}

export default Balloon

const Chat = styled.div`
  width: 80%;
  margin-bottom: 50px;
    @media (min-width: 768px) {
      width: 50%;
      margin-bottom: 120px;
    }
`
const Text = styled.p`
  font-family: 'Press Start 2P', cursive;
  font-size: 12px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
`