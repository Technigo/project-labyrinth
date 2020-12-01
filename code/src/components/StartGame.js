import React from 'react'
import { useDispatch } from 'react-redux'
import { startNewGame } from 'reducers/game';
import swal from "sweetalert";
import styled from 'styled-components'

const StartButton = styled.button`
  display: flex;
  background: black;
  color: #4CFF42;
  font-family: 'Inconsolata', monospace;
  font-size: 25px;
  padding: 10px;
`

export const StartGame = () => {
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
        dispatch(startNewGame(value));
      }
    });
  };

  return (
    <div>
      <StartButton onClick={handleOnClick}>Play</StartButton>
    </div>
  )
}
// Sen vill vi att denna knapp ska försvinna/bli mindre och en restart-knapp.