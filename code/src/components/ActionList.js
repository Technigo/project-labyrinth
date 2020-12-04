import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { getNextPosition } from '../reducers/reusable'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background: #00ff00;
  color: black;
  border: 2px solid #00ff00;
  border-radius: 10px;
`

const Description = styled.p`
  text-align: center;
  margin: 0px;
  margin-bottom: 10px;
  color: #00ff00;
  font-size: 20px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px dashed #00ff00;
  border-radius: 3px;
  padding: 20px;
  border-radius: 20px;
  margin: 25px;
`

export const ActionList = () => {

  const actions = useSelector(store => store.game.gameState.actions)
  const userName = useSelector(store => store.game.userName)
  const dispatch = useDispatch()

  const onAction = (action) => {
    dispatch(getNextPosition(action, userName))
  }

  return (
    <>
      {actions.map((action, index) => {
        return (
          <Container key={index}>
            <Description>{action.description}</Description>
            <Button onClick={() => onAction(action)}>Go {action.direction}</Button>
          </Container>
        )
      })}
    </>
  )
}