import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { game } from "../reducers/game";
import { CompassAnimation } from "components/CompassAnimation";

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
      <form>
        <p>Welcome Warrior to the tribe of Technigo!</p>
        <p>What's your name?</p>
        <input type="text" onChange={(event) => setInput(event.target.value)} />
        <button type="submit" disabled={!input} onClick={() => onButtonClick(input)}>
          Enter
        </button>
      </form>
    </>
  );
};

export default LandingPage;
