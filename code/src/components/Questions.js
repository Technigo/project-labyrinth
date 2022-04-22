import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import StartScreen from './StartScreen';
import GameScreen from './GameScreen'
import { LoadingScreen } from './LoadingScreen';

const StyledQuestions = styled.section`

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(255, 241, 206, 0.7);
    width: 30%;
    min-width: 300px;
    margin: 10% auto;
    padding: 20px;
    box-shadow: inset 1px 1px 17px 13px #323228bf;
  }

  button {
    background-color: #9f003e;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 18px;
    cursor: pointer;
    text-transform: uppercase;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 10px;
    text-align: center;
  }
`

const Questions = () => {
  const question = useSelector(store => store.questions.gamedata)
  const isLoading = useSelector(store => store.loading.isLoading)

    return (
      <>
      {isLoading ? (
        <div><LoadingScreen /></div>
      ) : (
      <StyledQuestions>
        <section>
          {question
            ? <GameScreen />
            : <StartScreen />
          }
        </section>
      </StyledQuestions>
      )}
      </>
    )
}

export default Questions