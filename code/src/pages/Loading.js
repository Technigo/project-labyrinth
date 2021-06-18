import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'


import StartGame from './StartGame'
import GameScreen from './GameScreen'

const LoadingText = styled.h1`
  text-align: center;
  margin-top: 350px;

  @media (min-width: 668px) {
    font-size: 25px; 
   }
  `;

const Loading = () => {
    const gameStatus = useSelector(store => store.questions.gameStatus)
    const loading = useSelector(store => store.questions.loading)

   return (
       <div>
           {loading && <LoadingText>LOADING...</LoadingText>}
           {gameStatus
           ? <GameScreen />
           : <StartGame />
           }
       </div>
       
   )
}

export default Loading