import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import StartScreen from './StartScreen';
import GameScreen from './GameScreen'

const StyledQuestions = styled.section`
section {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgb(255, 255, 255, 0.6);
  width: 50%;
  min-width: 300px;
  margin: 20% auto;
  padding: 20px;
}

button {
  background-color: #9f003e;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  text-transform: uppercase;
}

h1 {
  font-size: 30px;
}

h3 {
  font-size: 20px;
}
`


const Questions = () => {
  const question = useSelector(store => store.questions.gamedata)
  console.log(question)

    return (
      <StyledQuestions>
        <section>
          <div>
            {question
                ? <GameScreen />
                : <StartScreen />
            }
          </div>
        </section>
      </StyledQuestions>
    )
}

export default Questions