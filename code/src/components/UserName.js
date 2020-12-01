import React from 'react'
import { useDispatch } from 'react-redux'
import { startNewGame } from 'reducers/game';
import swal from "sweetalert";
import styled from 'styled-components'

const StartButton = styled.button`
  background: black;
  color: #4CFF42;
  font-family: 'Inconsolata', monospace;
`

export const UserName = () => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    swal({
      content: {
        element: "input",
        attributes: {
          placeholder: "Type your name",
          type: "text",
        },
      },
    }).then((value) => {
      if (value) {
        const name =
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
        dispatch(startNewGame(name));
      }
    });
  };

  return (
    <div>
      <StartButton onClick={handleOnClick}>Click here to start the game</StartButton>
    </div>
  )
}
