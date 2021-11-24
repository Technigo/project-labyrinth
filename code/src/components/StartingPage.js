import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components/macro";

import steps from "../reducers/steps";

import { fetchStart } from "../reducers/steps";

const Content = styled.div`
  padding: 20px;
`;

const InputField = styled.input`
  font-family: inherit;
  display: block;
  height: 36px;
  width: 98%;
  border: rgb(204, 204, 204) solid 1px;
`;

const Button = styled.button`
  position: relative;
  display: inline-block;
  margin: 10px;
  padding: 10px 10px;
  text-align: center;
  font-family: inherit;
  font-size: 16px;
  letter-spacing: 1px;
  text-decoration: none;
  color: #725ac1;
  background: rgba(46, 81, 218, 0.3);
  cursor: pointer;
  transition: ease-out 0.5s;
  border-radius: 30px;
  border: 2px solid #725ac1;
  border-radius: 10px;
  box-shadow: inset 0 0 0 0 #725ac1;

  &:hover {
    color: white;
    box-shadow: inset 0 -100px 0 0 #725ac1;
  }

  &:active {
    transform: scale(0.9);
  }
`;

const StartingPage = () => {
  const dispatch = useDispatch();
  return (
    <Content>
      <label>
        What is your name?
        <InputField
          type="text"
          name="newName"
          placeholder="An adventurers name..."
          onChange={(username) =>
            dispatch(steps.actions.setUsername(username.target.value))
          }
        />
      </label>
      <Button type="button" onClick={() => dispatch(fetchStart())}>
        Start your journey...
      </Button>
    </Content>
  );
};

export default StartingPage;
