/* eslint-disable linebreak-style */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateFetch } from 'reducers/labyrinth';
import styled from 'styled-components/macro';
// import {  } from '../styles/mainStyles';

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
        <MainText>{quest.description}</MainText>
        {quest.actions.map((details) => {
          return (
            <Wrapper key={details.description}>
              <SecondText>
                {details.direction}: {details.description}
              </SecondText>
              <DirectionButton
                type="button"
                onClick={() => onChoiceMade(details.direction)}>{details.direction}
              </DirectionButton>
              {console.log('btn - details.direction', details.direction)}
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}

export default Choices;

const MainText = styled.p`
  color: #43B771;
  // background-color: lightgrey;
  margin: 5%;
  font-size: 2rem;
  padding: 2%;

  @media (min-width: 1024px) {
   font-size: 3rem;
  }
`

const SecondText = styled.p`
  color: #43B771;
  font-size: 1.5rem;
  padding: 1%;

  @media (min-width: 1024px) {
    font-size 2em;
   }
`
const Wrapper = styled.div`
background-color: blue;
margin: 5%;
padding: 1%;
display: flex;
flex-direction: column;
align-items: center;
`
export const DirectionButton = styled.button`
background-color: #A7BDAC;
width: 15%;
font-size: 1.3rem;
margin: 5%;
border-color: lightgrey;
border-radius: 1px;
box-shadow: 1px 1px 1px grey;
color: black;
padding: 1%;
text-align: center;
`

