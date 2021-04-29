import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import "nes.css/css/nes.min.css";
import { game, generateGame } from "../reducers/game";

export const StartPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(generateGame(username));
    setUsername("");
  };

  return (
    <div>
      <i className="nes-octocat animate"></i>
      <form onSubmit={onFormSubmit}>
        <div className="nes-field">
          <label htmlFor="userName">Your name</label>
          <TextInput
            id="userName"
            className="nes-input"
            required
            type="text"
            placeholder="Type username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <Button type="submit" className="nes-btn is-primary">
          Play Game
        </Button>
      </form>
    </div>
  );
};

const Button = styled.button`
  width: 100px;
`;

const Form = styled.form`
  background-color: black;
`;

const TextInput = styled.input`
  width: 300px;

  @media (min-width: 768px) {
    width: 500px;
  }
`;
