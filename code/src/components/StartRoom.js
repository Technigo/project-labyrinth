//Here lives our username data and game initiation
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import { game } from "../reducers/game";
import { generateAction } from "../reducers/reusable";

export const StartRoom = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.name);

  //const emptyTask = (value) => value.replace(/\s/g, "").length === 0
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(generateAction(userName));
  };

  const onChangeEvent = (value) => {
    dispatch(game.actions.addUsername(value));
  };

  return (
    <Container>
      <p>Welcome {userName}</p>
      <Form onSubmit={handleSubmit}>
        <Textfield
          onChange={(event) => onChangeEvent(event.target.value)}
          type="text"
          placeholder="enter your name here..."
          required
        />
        <Button type="submit">START GAME</Button>
      </Form>
    </Container>
  );
};

const Container = styled.section`
  margin: 20px;
  padding: 20px;
  border: 1px solid red;
  text-align:center;
`;

const Form = styled.form`
  display: flex;
  //flex-direction: column;
`;

const Textfield = styled.input`
  color: #00ff7f;
  background-color: #000000;
  font-family: 'Inconsolata', monospace;
  padding: 5px;
  text-decoration: none;
  `;

const Button = styled.button`
  color: #00ff7f;
  background-color: #000000;
  font-family: 'Inconsolata', monospace;
  border: 
`;



