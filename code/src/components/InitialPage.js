import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchGameData, gameSteps } from "reducers/gameSteps";

export const InitialPage = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  return (
    <InitialPageContainer>
      <h1>Labyrinth Game</h1>
      <div>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Username"
          required
        ></input>
        <button
          onClick={() => {
            dispatch(gameSteps.actions.setUsername({ username }));
          }}
        >
          Start Game
        </button>
      </div>
    </InitialPageContainer>
  );
};

const InitialPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
