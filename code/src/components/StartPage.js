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
    <Main>
      <i className="nes-octocat animate"></i>
      <form onSubmit={onFormSubmit}>
        <div className="nes-field">
          <label className="name-input" htmlFor="userName">
            Your name
          </label>
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
    </Main>
  );
};

const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1200px) {
    height: 900px;
    width: 800px;
  }
`;

const Button = styled.button`
  width: 150px;
  margin-top: 20px;
`;

const Form = styled.form``;

const TextInput = styled.input`
  width: 300px;
  margin: 0;

  @media (min-width: 768px) {
    width: 500px;
  }
`;
