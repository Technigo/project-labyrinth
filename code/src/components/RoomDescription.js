import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Description = styled.p`
  text-align: center;
  color: #00ff00;
  font-size: 24px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 10px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  padding: 10px;
  padding-top: 50px;
  margin: 0 15px 15px 15px;
`

export const RoomDescription = () => {
  const description = useSelector(store => store.game.gameState.description)

  return (
    <Container>
      <Description>{description}</Description>
    </Container>
  )
}