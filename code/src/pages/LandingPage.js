import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";

import { game } from "../reducers/game";
import { CompassAnimation } from "../components/CompassAnimation";
import Button from "../components/Button";

const TextContainer = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 30px;

    & input {
      font-size: inherit;
      font-family: inherit;
      border-radius: 2px;
      border: none;
    }
`

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const onButtonClick = (username) => {
    dispatch(game.actions.setUserName(username));
    navigate("/start");
  };

  return (
    <>
      <CompassAnimation 
        width= '300px'
        height= '300px'/>
      <TextContainer>
        <p>Welcome Warrior to the tribe of Technigo!</p>
        <p>What's your name?</p>
        <input type="text" onChange={(event) => setInput(event.target.value)} />
        <Button type="submit" disabled={!input} onClick={() => onButtonClick(input)}>
          Enter
        </Button>
      </TextContainer>
    </>
  );
};

export default LandingPage;
