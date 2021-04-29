import React from 'react'
import styled from "styled-components/macro"
import { useDispatch } from 'react-redux'

import { gameContent } from 'reducers/labyrinth'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 6px;
  border: 1px solid darkgrey;
  background-color: transparent;
  margin-bottom: 20px;
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const DescriptionText = styled.p`
  margin: 0;
  color: black;
`
const CustomButton = styled.button`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 6px;
  background-color: whitesmoke;
  margin: 10px 0 10px 0;
  padding: 10px;
  cursor: pointer;
`;

export const GameCard = ({action}) => {
  const dispatch = useDispatch()

  const onSetDirection = (action) => {
    dispatch(gameContent(action))
  }

  return (
    <>
      <Container>
          <DescriptionText>{action.description}</DescriptionText>
          <CustomButton onClick={() => onSetDirection(action)}>Head {action.direction}</CustomButton>
      </Container>
    </>
  )
}