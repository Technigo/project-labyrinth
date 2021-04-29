import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'

import { StartGameButton } from 'styled-components/StartGameButton';
import questions, {initiateGame } from '../reducers/questions';

const StartGameBackground = styled.div`
  height: 700px;
`

const StartGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
  text-align: center;
  max-width: 400px;
  margin: auto;
  margin-top: 100px;
  `;

const StartImage = styled.img`
  max-width: 400px;
  margin: auto;

  // Mobile query
  @media (max-width: 768px) {
    width: 200px;
  }
`

const StartGame = () => {
    
  const [inputValue, setInputValue] = useState('');
  const restart = useSelector(store => store.questions.restart)
    const dispatch = useDispatch();

    const onUserNameSet = () => {
        dispatch(questions.actions.setUserName(inputValue));
        dispatch(initiateGame(inputValue));
    }

    if (restart) {
      return (
        <StartGame />
      ) 
    } 
  
   
    return (
      <StartGameBackground>
          <StartGameContainer>
            <p>Welcome to Labyrinth! Enter your name to start playing.</p>
            <input
                type="text"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />
            <StartGameButton type="button" onClick={onUserNameSet}>START</StartGameButton>
            <StartImage src="https://media.giphy.com/media/lAce6rIFOcqPu/giphy.gif" alt="start animation" />
            </StartGameContainer>
        </StartGameBackground>
    )
}


export default StartGame