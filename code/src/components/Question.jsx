import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextQuestion } from '../reducers/game';
import { Loading } from './Loading';
import styled from 'styled-components';
import { SummaryPage } from './SummaryPage';

import { StartScreen } from './StartScreen';


const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  font-family: 'Roboto', sans-serif;
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  height: auto;
  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  justify-content: space-between;
  padding: 5px 10px 15px 10px;
  width: 100%;
  align-items: center;
  background-color: #1c1a1a;
  @media (min-width: 769) {
    padding: 10px 10px 30px 10px;
    margin: 10px;
  }
`;

const Text = styled.h3`
  color: white;
  text-align: center;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  margin-top: 15px;
  @media (min-width: 769) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  color: white;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-bottom: 20px;
  @media (min-width: 769) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  background-color: #34623F;
  border: none; 
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  width: fit-content;
  font-family: 'Roboto', sans-serif;
  cursor: grab;
  border-radius: 10px;
  :hover {
    box-shadow: 0px 0px 15px -2px #1f9cee;
  }
`;


export const Question = () => {
  const userName = useSelector((store) => store.game.userName);
  const gameQuestion = useSelector((store) => store.game.question);
  const loading = useSelector((store) => store.ui.isLoading);
  const error = useSelector((store) => store.game.error);
  

  const dispatch = useDispatch();

  const onNextQuestion = (direction) => {
    dispatch(nextQuestion(userName, direction));
  }

  let content;

  if (gameQuestion && gameQuestion.actions.length === 0) {
    content = <SummaryPage description={gameQuestion.description}/>
  } else if (gameQuestion) {
    content = 
    <>
      <Text>{gameQuestion.description}</Text>
      <QuestionContainer>
      {gameQuestion.actions.map((action, index) => (
        <Container key={index}>
          <Description>{action.description}</Description>
          <Button onClick={() => onNextQuestion(action.direction)}>Go {action.direction}</Button>
        </Container>
    ))} 
    </QuestionContainer>
    </>
  } else {
    content = 
    <StartScreen />
  }
  return (
    <MainContainer> 
      {error && `something went wrong, reason: ${error}`}
      {loading && <Loading /> }
      {content} 
    </MainContainer>
  )
}
