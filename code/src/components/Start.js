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
      <div className="start-img-container">
        <img
          className="start-img"
          src="https://i.ibb.co/G5zV6Zk/Untitled-design-28.png"
          alt="picture of example characters"
        />
      </div>
      <div className="text-container">
        <h1 className="start-title">Welcome to the game, traveler!</h1>
      </div>
      <input
        className="nes-input"
        id="input"
        type="text"
        required
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="enter your name and step into the labyrinth"
      />
      <div className="button-container">
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
    </div>
  );
};

export default Start;
