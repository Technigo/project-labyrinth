import React from "react";
import { useDispatch } from "react-redux";
import { fetchGame } from "reducers/game";
import styled from "styled-components";
import { game } from "../reducers/game";

const StartCard = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

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
    padding: 5px;
    border-radius: 6px;
    margin: 10px;
    /* font-family: "Amatic SC", cursive; */
    background: lightcoral;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 6px;
    font-family: "Zen Kurenaido", sans-serif;
    font-style: italic;
  }
`;

const StartPage = () => {
  // const gameState = useSelector((store) => store.game.currentPosition);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(game.actions.setUsername(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchGame());
  };

  return (
    <>
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
    </>
  );
};

export default StartPage;
