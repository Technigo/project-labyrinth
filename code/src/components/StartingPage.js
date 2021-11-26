import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/macro";

import steps from "../reducers/steps";

import { fetchStart } from "../reducers/steps";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const InputField = styled.input`
  font-family: inherit;
  display: block;
  height: 36px;
  width: 98%;
  border: rgb(204, 204, 204) solid 1px;
`;

const Label = styled.label`
  font-size: 28px;
`;

const Button = styled.button`
  position: relative;
  display: inline-block;
  margin: 10px;
  padding: 10px 10px;
  text-align: center;
  font-family: inherit;
  font-size: 24px;
  letter-spacing: 1px;
  text-decoration: none;
  color: rgb(114, 84, 38);
  background: rgba(114, 84, 38, 0.3);
  cursor: pointer;
  transition: ease-out 0.5s;
  border-radius: 30px;
  border: 2px solid rgb(114, 84, 38);
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 rgb(114, 84, 38);
  margin-top: 15px;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 rgb(114, 84, 38);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const StartingPage = () => {
  const dispatch = useDispatch();
  const username = useSelector((store) => store?.steps?.username);
  const handleClick = () => {
    if (username.length > 0) {
      dispatch(fetchStart());
    } else return alert("Woops, you have to type a name!");
  };
  return (
    <Content>
      <Label>
        Hey there adventurer! What is your name?
        <InputField
          type="text"
          name="newName"
          placeholder="An adventurers name..."
          onChange={(username) =>
            dispatch(steps.actions.setUsername(username.target.value))
          }
        />
      </Label>
      <Button type="button" onClick={() => handleClick()}>
        Start your journey...
      </Button>
    </Content>
  );
};

export default StartingPage;
