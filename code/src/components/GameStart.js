import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { game } from "../reducers/game";
import { startFetch } from "../reducers/reusable";
import { GameHeader } from "../lib/GameContainerStyle";
import { GameButton } from "../lib/Button";
import { InputForm } from "../lib/GameStartStyle";

export const GameStart = () => {
  const [userNameInput, setUserNameInput] = useState("");
  const dispatch = useDispatch();
  const gameDetails = useSelector((store) => store.game.gameDetails);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.updateUserName(userNameInput));
    dispatch(startFetch(userNameInput));
  };

  return (
    <>
      {!gameDetails.coordinates && (
        <section>
          <GameHeader>Want to play?</GameHeader>
          <InputForm>
            <label value="username" />
            <input
              type="text"
              placeholder="Type username"
              onChange={(event) => setUserNameInput(event.target.value)}
            />
            <GameButton
              onClick={handleSubmit}
              width={100}
              disabled={!userNameInput}
            >
              Let's go!
            </GameButton>
          </InputForm>
        </section>
      )}
    </>
  );
};
