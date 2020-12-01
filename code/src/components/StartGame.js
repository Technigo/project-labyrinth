import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
    <div>
      <StartButton onClick={handleOnClick}>{username === '' ? 'Play' : 'Restart'}</StartButton>
    </div>
  )
}
// Sen vill vi att denna knapp ska försvinna/bli mindre och en restart-knapp.