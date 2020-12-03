import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { game } from '../reducers/game'
import { getFirstPosition } from '../reducers/reusable'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  font-size: 30px;
  font-weight: bold;
  background: #00ff00;
  color: black;
  border: 2px solid #00ff00;
  border-radius: 20px;
  margin: 25px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const StartButton = () => {

  const dispatch = useDispatch()

  const onStart = () => {
    const userName = Math.random()
    console.log(userName)
    dispatch(game.actions.setUserName(userName))

    dispatch(getFirstPosition(userName))
  }

  return (
    <Container>
      <Button onClick={() => onStart()}>Play game</Button>
    </Container>
  )
}