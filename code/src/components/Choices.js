/* eslint-disable prefer-template */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateFetch } from 'reducers/labyrinth';
import styled from 'styled-components/macro';
import TypeIt from 'typeit-react';
import RestartBtn from './RestartBtn';
import { DirectionButton, Devices, Wrapper } from './mainStyles';
import Footer from './Footer';

const Choices = ({ username }) => {
  const [hiddenText, setHiddenText] = useState(false);
  const dispatch = useDispatch();

  const quest = useSelector((store) => store.labyrinth.quest);

  const onChoiceMade = (direction) => {
    dispatch(generateFetch({ url: 'https://labyrinth.technigo.io/action',
      username,
      type: 'move',
      direction }));
  }

  const showHiddenText = () => {
    setHiddenText(true);
    console.log(hiddenText)
  }

  const hiddenDescription = (details) => {
    if (hiddenText) {
      return (
        <SecondText key={details.description}>
          {details.direction}: {details.description}
        </SecondText>
      )
    }
  }

  return (
    <ChoicesSection>
      <QuestTextWrapper>
        <TypeIt
          options={{
            speed: 20
          }}>
          <MainText>{quest.description}</MainText>
        </TypeIt>
      </QuestTextWrapper>
      <ShowMoreBtn className={quest.coordinates === '1,3' ? 'hiddenButton' : ''} type="button" onClick={showHiddenText}>&#62;</ShowMoreBtn>
      {quest.actions.map((details) => {
        return (
          <Wrapper key={details.description}>
            {hiddenDescription(details)}
            <ButtonWrapper>
              <DirectionButton
                type="button"
                direction={details.direction}
                onClick={() => onChoiceMade(details.direction)}>{details.direction}
              </DirectionButton>
            </ButtonWrapper>
          </Wrapper>
        );
      })}
      {quest.coordinates === '1,3' && (
        <>
          <RestartBtn />
          <Footer />
        </>
      )}
    </ChoicesSection>
  );
}

export default Choices;

const QuestTextWrapper = styled.div`
  margin-top: -8%;
  min-height: 230px;
`

const ChoicesSection = styled.section`

`

const MainText = styled.p`
  color: #43B771;
  font-size: 1.3em;
  line-height: 1.4;

  @media ${Devices.tablet} {
    font-size: 1.4em;
  }

  @media ${Devices.desktop} {
    font-size: 1.5em;
  }
`

const ShowMoreBtn = styled.button`
  color: blue;
  background-color: transparent;
  border: transparent;
  font-weight: bold;
  font-size: 3em;

  &:focus {
    rotate: 90deg;
  }
`

const SecondText = styled.p`
  color: #43B771;
  font-size: 1.2em;
  font-weight: 400;
  padding: 1%;
  line-height: 1.2;

  @media ${Devices.tablet} {
    font-size: 1.3em;
  }

  @media ${Devices.desktop} {
    font-size: 1.4em;
  }
`

const ButtonWrapper = styled.div`
  position: fixed;
  display: inline-grid;
  grid-template-columns: 100% 75% 75% 75% 75%;
  margin-left: -30%;
  bottom: 2%;

  @media ${Devices.tablet} {
  grid-template-columns: 100% 100% 100% 100% 100%;
  margin-left: -5%;
  bottom: 3%;
  }

  @media ${Devices.laptop} {
  grid-template-columns: 100% 100% 100% 100% 100%;
  margin-left: 10%;
  bottom: 20%;
  }

  @media ${Devices.desktop} {
  grid-template-columns: 100% 100% 100% 100% 100%;
  margin-left: -10%;
  bottom: 20%;
  }
`
