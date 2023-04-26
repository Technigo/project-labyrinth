import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { labyrinth, startLabyrinth } from 'reducers/labyrinth'
import { Button } from 'reusableComponents/Button';
import { Title } from 'reusableComponents/Title';

export const WelcomeScreen = () => {
  const [userName, setUsername] = useState('');
  const dispatch = useDispatch();

  const onAction = (e) => {
    e.preventDefault()
    dispatch(labyrinth.actions.setUsername(userName))
    dispatch(startLabyrinth())
  }

  return (
    <WelcomeWrapper>
      <Form onSubmit={onAction}>
        <Title>Welcome player 1 would you like to enter the Labyrinth?</Title>
        <Input
          type="text"
          className="userName"
          placeholder="Enter your name here"
          required
          onChange={(event) => setUsername(event.target.value)}
          value={userName} />
        <Button type="submit"> Enter the Labyrinth </Button>
      </Form>
    </WelcomeWrapper>)
};

const WelcomeWrapper = styled.section`

  background-image: url('/images/welcomeScreen.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding:15px;
  height: max-content;
  max-width:70%;
  border-radius:20px;
  background-color: rgb(0 0 0 / 50%);
`
const Input = styled.input`
    border: 0;
    margin: 1em 0 1em 0;
    padding:1.3em;
    width: 15em;
    height: 1em;
    font-size: 16px;
    border-radius: 8px;
    font-weight: 400;
    background-color: #f5f5f5;
    color: #000;
    transition: all .15s ease;
    box-sizing:border-box;
    font-family: 'Shadows Into Light', cursive;
    &&:focus{
     background-color: rgb(74 74 74 / 30%);
      outline: none;
      color: #f5f5f5;
    }

`