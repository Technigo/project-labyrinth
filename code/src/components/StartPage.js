import React from "react";
import { useDispatch } from "react-redux";
import { fetchGame } from "reducers/game";
import styled, { keyframes } from "styled-components";
import { game } from "../reducers/game";
import Labyrinth from "../pictures/labyrinth.jpg";

const jump = keyframes`
  0%   {transform: translate3d(0,0,0) scale3d(1,1,1);}
  40%  {transform: translate3d(0,10%,0) scale3d(1,1,1);}
  100% {transform: translate3d(0,30%,0) scale3d(1,1,1);}
`;

const StartCard = styled.div`
  background-image: url(${Labyrinth});
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section {
    width: 80vw;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 100px;
    padding: 10px 5px;
    margin-top: 30px;
    border: 1px solid white;
    font-family: "Zen Kurenaido", sans-serif;
    background: #b87333;
    color: white;
    font-weight: bold;
    cursor: pointer;
    animation: ${jump} 0.5s linear alternate infinite;
  }

  input {
    padding: 10px;
    border: none;
    font-family: "Zen Kurenaido", sans-serif;
    font-style: italic;
  }
`;

const StartPage = () => {
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchGame());
  };

  return (
    <StartCard>
      <section>
        <h1>
          Welcome to our Labyrinth. You will get a number och choices to
          navigate through this maze. Good luck...
        </h1>
        <h2>Let the games begin!</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Whats your name..?"
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Start</button>
        </form>
      </section>
    </StartCard>
  );
};

export default StartPage;
