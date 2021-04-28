import React, {useState} from 'react';
import styled from 'styled-components/macro';
import {useDispatch} from 'react-redux';
import "nes.css/css/nes.min.css";


import labyrinth, { generateStart } from '../reducers/labyrinth'

const Container = styled.div`

`

const Title = styled.h1`
  text-align: center;
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
      <Title>Labyrinth</Title>
      <Start>
        <div style={{background:"#212529", padding: "1rem"}} className="nes-field is-inline">
          <label htmlFor="dark_field" style={{color: "#fff"}}>Your name</label>
          <input type="text" id="dark_field" className="nes-input is-dark" placeholder="..." value={userInput} onChange={(e)=> setUserInput(e.target.value)} />
        </div>
        <button type="button" style={{marginTop: "20px"}}
            className="nes-btn" onClick={onUsernameSet}>Start the game!</button>
      </Start>
    </Container>
  )
};

export default StartScreen;