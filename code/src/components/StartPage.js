import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGame } from "reducers/game";
import { nextStep } from "reducers/game";
import styled from "styled-components";

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
  const game = useSelector((store) => store.game.gameList);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  return (
    <>
      <StartCard>
        <section>
          <h1>
            Welcome to our Labyrinth. You will get a number och choices to
            navigate through this maze. Good luck...
          </h1>
          <h2>Let the games begin!</h2>
          <form>
            <label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </label>
          </form>
          <button
            disabled={input === ""}
            type="button"
            onClick={() => {
              dispatch(fetchGame());
            }}
          >
            Start
          </button>
        </section>

        {game?.actions?.map((item) => (
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
        ))}
      </StartCard>
    </>
  );
};

export default StartPage;
