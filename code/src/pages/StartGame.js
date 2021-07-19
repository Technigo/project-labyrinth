import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro'

import GameScreen from './GameScreen'
import { StartGameButton } from 'styled-components/StartGameButton';
import { questions, initiateGame} from '../reducers/questions';
import Loading from './Loading'


const StartGameFormContainer = styled.form`
  background-color: #000;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding-bottom: 100px;
  color: #59e686;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  `;

const StartImage = styled.img`
  max-width: 400px;
`
const Title = styled.h1`
  font-size: 26px;
  padding: 40px 20px;
  animation: blinking 1.2s infinite;
  @keyframes blinking {
    0%{color: rgb(32, 8, 191);}
    49%{color: rgb(32, 8, 191);}
    60%{color: transparent;}
    99%{color:transparent;}
    100%{color: rgb(32, 8, 191);}  
  }
  @media (min-width: 668px) {
   font-size: 45px; 
  }
  `

const StartGame = () => {   
  const [inputValue, setInputValue] = useState('');
  const gameStatus = useSelector(store => store.questions.gameStatus)
  const loading = useSelector(store => store.questions.loading)
  const dispatch = useDispatch();

    const handleStartGame = (event) => {
        event.preventDefault()
        dispatch(questions.actions.setUserName(inputValue));
        dispatch(initiateGame(inputValue));
       
    }
    const onUserNameSet = () => {
      dispatch(questions.actions.setUserName(inputValue));
      dispatch(initiateGame(inputValue));
    };

    if (gameStatus) {
      return (
        <GameScreen/>
      ) 
    } 
    if (loading) {
      return (
        <Loading />
      )
    }
  
    return (
    <>
          <StartGameFormContainer autocomplete='off' onSubmit={handleStartGame}>
            <Title>Welcome to Labyrinth! Enter your name to start playing</Title>
            <div className="nes-field is-inline">
            <label htmlFor="inline_field"></label>
            <input
                required
                type="text"
                id="inline_field"
                className="nes-input is-success"
                placeholder="Enter name here..."
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
            />
            </div>
            <StartGameButton onClick={onUserNameSet}>START</StartGameButton>
            </StartGameFormContainer>
            <StartImage src="https://media.giphy.com/media/lAce6rIFOcqPu/giphy.gif" alt="start animation" />
        
    </>
    )
  
}



export default StartGame