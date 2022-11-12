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
              <MainText>
                {details.direction}: {details.description}
              </MainText>
              <button
                type="button"
                onClick={() => onChoiceMade(details.direction)}>{details.direction}
              </button>
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
`

const Wrapper = styled.div`
`