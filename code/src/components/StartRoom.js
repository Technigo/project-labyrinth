//Here lives our username data and game initiation
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

import { game } from "../reducers/game";
import { generateAction } from "../reducers/reusable";
import { Button } from "../lib/Buttons"
import { Textfield } from "../lib/Textfields"

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
      <Title>Welcome {userName}</Title>
      <Form onSubmit={handleSubmit}>
        <Textfield
          onChange={(event) => onChangeEvent(event.target.value)}
          type="text"
		      placeholder="enter your name here..."
          //onChange={(event) => setNewUsername(event.target.value)}
          required
        />
        <Button 
          type="submit" 
          title="start game"/>
        {/* disabled={newUsername.length<5 || newUsername.length>20 || emptyUsername(newUsername)} */}
      </Form>
    </Container>
  );
};

const Title = styled.h2`
  font-size: 32px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`

const Container = styled.section`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;


