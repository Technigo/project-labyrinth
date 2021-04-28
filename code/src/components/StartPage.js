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
    <form onSubmit={onFormSubmit}>
      <div className="nes-field">
        <label htmlFor="userName">Your name</label>
        <input
          id="userName"
          className="nes-input"
          required
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button type="submit" className="nes-btn is-primary">
        Send
      </button>
    </form>
  );
};

const Form = styled.form``;
const TextInput = styled.input``;
