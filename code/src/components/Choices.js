/* eslint-disable no-nested-ternary */
/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateFetch } from 'reducers/labyrinth';
import styled from 'styled-components/macro';
import TypeIt from 'typeit-react';
import RestartBtn from './RestartBtn';
import { DirectionButton, Devices } from './mainStyles';

const Choices = ({ username }) => {
  const dispatch = useDispatch();

  const quest = useSelector((store) => store.labyrinth.quest);

  const onChoiceMade = (direction) => {
    dispatch(generateFetch({ url: 'https://labyrinth.technigo.io/action',
      username,
      type: 'move',
      direction }))
  }

  return (
    <section>
      <div>
        <QuestTextWrapper>
          <TypeIt>
            <MainText>{quest.description}</MainText>
          </TypeIt>
        </QuestTextWrapper>
        {quest.actions.map((details) => {
          return (
            <Wrapper key={details.description}>
              <SecondText>
                {details.direction}: {details.description}
              </SecondText>
              <ButtonWrapper>
                <DirectionButton
                  type="button"
                  direction={details.direction}
                  onClick={() => onChoiceMade(details.direction)}>{details.direction}
                </DirectionButton>
              </ButtonWrapper>
            </Wrapper>
          )
        })}
        {quest.coordinates === '1,3' && (
          <RestartBtn />
        )}
      </div>
    </section>
  )
}

export default Choices;

const QuestTextWrapper = styled.div`
  min-height: 260px;
`

const MainText = styled.p`
  color: #43B771;
  margin: 5%;
  font-size: 1.3em;
  padding: 1%;
  line-height: 1.4;

  @media ${Devices.tablet} {
    font-size: 1.4em;
  }

  @media ${Devices.desktop} {
    font-size: 1.5em;
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
const Wrapper = styled.div`
background-color: blue;
display: flex;
flex-direction: column;
align-items: flex-start;
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
