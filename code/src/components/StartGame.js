import React from "react";
import { useDispatch, useSelector } from "react-redux";

import swal from "sweetalert";

import { startNewGame } from "reducers/game";
import { StyledButton } from "lib/Buttons";

export const StartGame = () => {
  const dispatch = useDispatch();
  const username = useSelector((store) => store.game.username);

  const handleOnClick = () => {
    swal({
      content: {
        element: "input",
        attributes: {
          placeholder: "What's your name, brave adventurer?",
          type: "text",
        },
      },
    }).then((value) => {
      if (value) {
        dispatch(startNewGame(value));
      }
    });
  };

  return (
    <StyledButton play={username === ""} onClick={handleOnClick}>
      {username === "" ? "Play" : "Restart"}
    </StyledButton>
  );
};
