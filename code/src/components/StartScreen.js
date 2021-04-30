import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {useDispatch} from 'react-redux';
import "nes.css/css/nes.min.css";

import labyrinth, { generateStart } from '../reducers/labyrinth'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px){
    width: 600px;
  }
  @media (min-width: 1024px){
  width: 800px;
  }
`

const Title = styled.span`
text-align: center;
font-size: 24px;

@media (min-width: 768px){
font-size: 30px;
}
`
const SmallTitle = styled.h2`
text-align: center;
font-size: 18px;
color: #c7c7c7;

@media (min-width: 768px){
font-size: 24px;
}
`
const Start = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const StartScreen = () => {
    const [userInput, setUserInput] = useState("")
    const dispatch=useDispatch();

const onUsernameSet = () => {
    dispatch(labyrinth.actions.setUsername(userInput));
    dispatch(generateStart())
}

  return (
    <Container>
      <SmallTitle>Welcome to <Title>Labyrinth</Title> </SmallTitle>
      <SmallTitle>Enter your name and start your journey!</SmallTitle>
      <Start>
        <div style={{background:"#212529",
          padding: "1rem", marginTop: "20px"}}
          className="nes-field is-inline">
          <label htmlFor="dark_field" style={{color: "#fff"}}>Your name</label>
          <input
            type="text" id="dark_field"
            className="nes-input is-dark"
            placeholder="..."
            value={userInput}
            onChange={(e)=> setUserInput(e.target.value)} />
          </div>
        <button
          type="button"
          style={{marginTop: "20px"}}
          className="nes-btn"
          onClick={onUsernameSet}>
            Start the game!
        </button>
      </Start>
    </Container>
  )
};

export default StartScreen;