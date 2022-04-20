import React, { useState } from "react";
import { useDispatch } from "react-redux";
import gameplay, { generateFirstQuestion } from "reducers/gameplay";
import styled from "styled-components";

const Input = styled.input`
  color: black;
  background-color: white;
  font-size: 16px;
  font-family: inherit;
  margin: 10px auto;
  padding: 10px;
  border: none;
  border-radius: 0;
`;

const Button = styled.button`
  color: white;
  background-color: grey;
  font-size: 16px;
  font-family: inherit;
  margin: 10px auto;
  padding: 10px;
  border: none;
  border-radius: 0;
  transition: ease-in 0.2s;

  &:disabled {
    opacity: 0.5;
  }
`;

const Start = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(gameplay.actions.setUsername(inputValue));
    dispatch(generateFirstQuestion());
    setInputValue("");
  };

  return (
    <>
      <h1>Welcome to our labyrinth</h1>
      <label htmlFor="name">Enter your name to start the game</label>
      <form onSubmit={submitHandler}>
        <Input
          id="name"
          type="text"
          value={inputValue}
          required
          autofocus
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Player name..."
        />
        <Button type="submit" disabled={inputValue.length === 0}>
          Enter
        </Button>
      </form>
    </>
  );
};

export default Start;
