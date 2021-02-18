import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { gameReducer } from '../reducers/gameReducer'

export const EndGame = () => {
  const dispatch = useDispatch()
  return (
    <Container>
      <Message>YOU DID IT!!!</Message>
      <Button
        type="button"
        onClick={() => dispatch(gameReducer.actions.clearCurrentStep())}>
        EXIT
      </Button>
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

`
const Button = styled.button`
  font-family: 'Mystery Quest', cursive;
  font-size: 16px;
  margin: 20px;
`

const Message = styled.p`
  color: #ffff00;
  font-family: 'Mystery Quest', cursive;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 0;
`
