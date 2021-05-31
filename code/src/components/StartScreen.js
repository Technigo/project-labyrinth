import React, { useState } from 'react'
import styled from "styled-components/macro"
import { useDispatch } from 'react-redux'

import labyrinth, { startContent } from '../reducers/labyrinth'

const Container = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  border-radius: 6px;
  background: rgb(246,226,189, 0.5);
  margin-bottom: 20px;
  width: 70%;
  padding: 40px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`

const Title = styled.h1`
  color: #3b2e36;
  margin: 0 0 20px 10px;
  font-size: 30px;

  @media (min-width: 768px) {
    font-size: 34px;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`

const SubTitle = styled.h2`
  color: #3b2e36;
  font-size: 20px;
  margin: 0 0 0 10px;

  @media (min-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 1024px) {
    font-size: 26px;
  }
`

const CustomButton = styled.button`
  border-radius: 6px;
  border: 2px solid #3b2e36;
  background-color: rgb(82,88,13, 0.7);
  margin: 10px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
  font-family: 'New Tegomin', serif;
  align-self: center;

  @media (min-width: 768px) {
    font-size: 22px;
    padding: 5px 15px;
    align-self: none;
  }

  @media (min-width: 1024px) {
    font-size: 26px;
  }
  
  &:hover {
    background-color: rgb(82,88,13, 0.5);
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const InputField = styled.input`
  margin: 8px;
  border: 2px solid #3b2e36;
  border-radius: 6px;
  background-color: transparent;
  font-size: 18px;
  font-family: 'New Tegomin', serif;
  font-weight: bold;
  color: #3b2e36;
  padding: 4px;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()
  
  const onUserSet = () => {
    dispatch (labyrinth.actions.setName(inputValue))

    dispatch(startContent())
  }

  return (
      <Container>
        <Title>Welcome to the labyrinth!</Title>
        <SubTitle>Enter your name</SubTitle>
        <InputContainer>
          <InputField 
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            autoFocus
          />
          <CustomButton
            onClick={onUserSet}
          >
            START
          </CustomButton>
        </InputContainer>
      </Container>
  )
}

export default StartScreen