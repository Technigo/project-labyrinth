import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { game } from '../reducers/game';
import { chooseNextStep } from '../reducers/reusable'
import { Loader } from './Loader';
import { Container, Section, Text, Description, Wrapper, GameButtonWrapper } from '../lib/GameContinueStyle';
import { GameButton } from '../lib/Button';

export const GameContinue = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.game.userName);
  const games = useSelector((store) => store.game.gameDetails);
  const loader = useSelector(store => store.game.isLoading);

  

  
  const nextStep = direction => {
    dispatch(chooseNextStep(userName, direction));
    dispatch(game.actions.setLoader(true));
  }
  const restartGame = () => {
    dispatch(game.actions.restartGame())
  }


  return (

    <Section>
      {loader && <Loader />}
      <Text>{games.description}</Text>
      <Container>
        {games.actions.map((item, index) => {
          return (
            <Wrapper key={index}>
              <Description>{item.description}</Description>
              <GameButtonWrapper>
                <GameButton 
                  onClick={() => nextStep(item.direction)}
                  width={125}
                >
                  go {item.direction}
                </GameButton>
              </GameButtonWrapper>
            </Wrapper>
          )
        })}
      </Container>
      <GameButton onClick={() => restartGame()}>restart</GameButton>
    </Section> 
  );
};