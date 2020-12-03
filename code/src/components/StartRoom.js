//Here lives our username data and game initiation
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import { game } from "../reducers/game";
import { generateAction } from "../reducers/reusable";

export const StartRoom = () => {
  const userName = useSelector((store) => store.game.name);
  // const [newUsername, setNewUsername] = useState("")
  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(generateAction(userName));
  };
  // setNewUsername("")

  //const emptyUsername = (value) => value.replace(/\s/g, "").length === 0

  const onChangeEvent = (value) => {
    dispatch(game.actions.addUsername(value));
  };

  return (
    <Container>
      <h2>Welcome {userName}</h2>
      <Form onSubmit={handleSubmit}>
        <Textfield
          onChange={(event) => onChangeEvent(event.target.value)}
          type="text"
          placeholder="enter your name here..."
          //onChange={(event) => setNewUsername(event.target.value)}
          required
        />
        <Button type="submit">START GAME</Button>
        {/* disabled={newUsername.length<5 || newUsername.length>20 || emptyUsername(newUsername)} */}
      </Form>
    </Container>
  );
};

const Container = styled.section`
  text-align:center;
`;

const Form = styled.form`
  display: flex;
  //flex-direction: column;
`;

const Textfield = styled.input`
  color: #00ff7f;
  background-color: transparent;
  font-family: 'Inconsolata', monospace;
  font-size: 26px;
  padding: 10px 20px;
  text-decoration: none;
  border: 1px solid #00ff7f;
  margin-right: 10px;
  transition: 0.3s ease;

  &:focus {
    outline: 2px solid red;
    border: none;
  }

  &:hover {
    background-color: rgb(0, 255, 127, 0.2); 
  }
  `;

const Button = styled.button`
  color: #00ff7f;
  background-color: transparent;
  font-family: 'Inconsolata', monospace;
  border: 1px solid #00ff7f;
  font-size: 22px;
  transition: 0.3s ease;
  cursor: pointer;

  &:focus {
    outline: 2px solid red;
    border: none;
  }

  &:hover {
    background-color: rgb(0, 255, 127, 0.2); 
  }
`;



