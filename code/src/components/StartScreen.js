import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGame, labyrinth } from 'reducers/labyrinth';

import TypeIt from 'typeit-react';
import styled from 'styled-components';
import { StartContainer, SubmitBtn, TextP, Header, HeadedingOneContainer } from '../styles/GlobalStyles';

const StartScreen = () => {
  const dispatch = useDispatch()

  const [usernameInput, setUsernameInput] = useState('')
  const onSubmitHandler = (e) => {
    e.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInput))
    dispatch(startGame())
  }

  return (
    <StartContainer>
      <Header>
        <HeadedingOneContainer>
          <TypeIt
            options={{
              speed: 40
            }}>
            <TextP>Type in your name:</TextP>
          </TypeIt>
        </HeadedingOneContainer>

        <Form
          onSubmit={onSubmitHandler}>
          <br />
          <Input
            required
            type="text"
            placeholder="Enter username"
            value={usernameInput}
            onChange={(event) => setUsernameInput(event.target.value)} />
          <SubmitBtn type="submit">Start</SubmitBtn>
        </Form>
      </Header>
    </StartContainer>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 300px;
`;

const Input = styled.input`
  height: 25px;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export default StartScreen;