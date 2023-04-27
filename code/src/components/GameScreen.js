import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStory } from 'reducers/Game';
import { Loading } from './Loading';
import { EndGame } from './EndGame';
import { DirectionButton } from '../styles/Button';
import { GameScreenSection, GameSection } from '../styles/Sections';

/*
export const GameScreenSection = styled.section`
background-color: green;
background-image: url(${maze});
height: 100vh;
display: flex;
flex-direction: column;
gap: 3%;
align-items: center;
justify-content: center;
`
export const GameSection = styled.section`
display: flex;
flex-direction: column;
gap: 10px;
font-family: "Press Start 2P";
font-size: 10px;
font-size: 1em;
line-height: 1.6em;
background: white;
border: 10px solid black;
align-self: center;
width: 60%;
margin-right: auto;
margin-left: auto;
padding: 2%;
margin-bottom: 2%;

@media (min-width: 770px) {
    font-size: 1em;
    line-height: 1.6em;
}`

*/
export const GameScreen = () => {
  const dispatch = useDispatch();
  const gameStep = useSelector((store) => store.game.response);
  const loading = useSelector((store) => store.game.loading);
  const actions = useSelector((store) => store.game.response.actions);

  const onClickNextStep = (direction) => {
    dispatch(getStory(direction))
  };

  if (loading) {
    return <Loading />
  }

  if (actions && actions.length === 0) {
    return <EndGame />
  }

  return (
    <GameScreenSection>
      <GameSection>
        <p> {gameStep.description} </p>
      </GameSection>
      <section>
        {gameStep.actions.map((singleStep) => {
          return (
            <GameSection key={singleStep.direction}>
              <h2> {singleStep.description} </h2>
              <DirectionButton
                type="button"
                onClick={() => onClickNextStep(singleStep.direction)}>
                {singleStep.direction}
              </DirectionButton>
            </GameSection>
          )
        })}
      </section>
    </GameScreenSection>
  )
}