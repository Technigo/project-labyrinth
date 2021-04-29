import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nextQuestion } from '../reducers/game';
import { Loading } from './Loading';
import { SummaryPage } from './SummaryPage';
import { StartScreen } from './StartScreen';
import { 
  MainContainer, 
  QuestionContainer, 
  Container, 
  TitleText, 
  Description, 
  Button } from './Styling';

export const Question = () => {
  const userName = useSelector((store) => store.game.userName);
  const gameQuestion = useSelector((store) => store.game.question);
  const loading = useSelector((store) => store.ui.isLoading);
  
  const dispatch = useDispatch();

  const onNextQuestion = (direction) => {
    dispatch(nextQuestion(userName, direction));
  };

  let content;

  if (gameQuestion && gameQuestion.actions.length === 0) {
    content = <SummaryPage description={gameQuestion.description}/>
  } else if (gameQuestion) {
    content = 
    <>
      <TitleText>{gameQuestion.description}</TitleText>
      <QuestionContainer>
      {gameQuestion.actions.map((action, index) => (
        <Container key={index}>
          <Description>{action.description}</Description>
          <Button 
            onClick={() => onNextQuestion(action.direction)}>
              Go {action.direction}
          </Button>
        </Container>
    ))} 
      </QuestionContainer>
    </>
  } else {
    content = <StartScreen />
  }

  return (
    <MainContainer> 
      {loading && <Loading /> }
      {content} 
    </MainContainer>
  )
};