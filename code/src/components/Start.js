import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { labyrinth, startLabyrinth } from "../reducers/labyrinth";

const Start = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const inputAdd = () => {
    dispatch(labyrinth.actions.setUsername(input));
    dispatch(startLabyrinth());
  };
  return (
    <div className="main">
      <div className="start-image-wrap">
        <img
          className="start-image"
          src="https://i.ibb.co/G5zV6Zk/Untitled-design-28.png"
          alt="picture of example characters"
        />
      </div>
      <h1 className="start-title">Welcome to the game</h1>
      <input
        className="nes-input"
        type="text"
        required
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button
        className="nes-btn is-warning"
        disabled={!input}
        onClick={() => {
          inputAdd();
        }}
      >
        Start game
      </button>
    </div>
  );
};

export default Start;
