import React from "react";
import { useDispatch } from "react-redux";
import { fetchGame } from "reducers/game";
import styled from "styled-components";
import { game } from "../reducers/game";

const StartCard = styled.div`
  background: lightblue;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Amatic SC", cursive;

  section {
    width: 500px;
    text-align: center;
  }

  button {
    width: 100px;
    padding: 5px;
    border-radius: 6px;
    margin: 10px;
    font-family: "Amatic SC", cursive;
    background: lightcoral;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 6px;
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
              <input type="text" onChange={handleInputChange} />
            </label>

            <button type="submit">Start</button>
          </form>
        </section>

        {/* <TheGame /> */}
      </StartCard>
      {/* {game?.actions?.map((item) => (
          <p key={item.description}>{item.description}</p>
        ))}
        {game?.actions?.map((item) => (
          <button
            key={item.direction}
            onClick={() => {
              dispatch(nextStep(item.direction));
            }}
          >
            {item.direction}
          </button>
        ))} */}
    </>
  );
};

export default StartPage;
