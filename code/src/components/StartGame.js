import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { game, fetchStartGame } from "../reducers/game";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content; center; 
  text-align: center; 
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  margin: 10px;
  padding: 10px;
`;

export const StartGame = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchStartGame());
  };

  return (
    <Container>
      <h1>Are you ready for an adventure?</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Please enter your name</p>
            <input type="text" required onChange={handleInputChange} />
            <button type="submit">START GAME</button>
          </label>
        </form>
      </div>
    </Container>
  );
};
