import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro'

import GameScreen from './GameScreen'
import { StartGameButton } from 'styled-components/StartGameButton';
import { questions, initiateGame} from '../reducers/questions';
import Loading from './Loading'

const StartGameBackground = styled.div`
  height: 700px;

  @media (min-width: 668px) {
    font-size: 45px; 
   }
`
const StartGameFormContainer = styled.div`
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
  const [userName, setUserName] = useState('');
  const gameStatus = useSelector(store => store.questions.gameStatus)
  const loading = useSelector(store => store.questions.loading)
  const dispatch = useDispatch();

    const handleStartGame = (event) => {
        event.preventDefault()
        dispatch(questions.actions.setUserName(userName));
        dispatch(initiateGame(userName));
        setUserName('')
    }

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
      <StartGameBackground>
          <StartGameFormContainer autocomplete='off' onSubmit={handleStartGame}>
            <Title>Welcome to Labyrinth! Enter your name to start playing.</Title>
            <label htmlFor="inline_field"></label>
            <input
                required
                type="text"
                id="inline_field"
                className="nes-input"
                placeholder="Enter name here..."
                value={userName}
                onChange={event => setUserName(event.target.value)}
            />
            <StartGameButton type="submit">START</StartGameButton>
            <StartImage src="https://media.giphy.com/media/lAce6rIFOcqPu/giphy.gif" alt="start animation" />
            </StartGameFormContainer>
        </StartGameBackground>
      </>
    )
}


export default StartGame