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
      <p>Welcome {userName}</p>
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
  border: 1px solid #00ff7f;
  margin: 5px;

  &:focus {
    outline: 2px solid red;
    border: none;
  }
  `;

const Button = styled.button`
  color: #00ff7f;
  background-color: #000000;
  font-family: 'Inconsolata', monospace;
  border: 1px solid #00ff7f;
  margin: 5px;

  &:focus {
    outline: 2px solid red;
    border: none;
  }
`;



