/* eslint-disable linebreak-style */
import React from 'react';
import { fetchGame } from 'reducers/choices';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

export const Game = () => {
  const description = useSelector((state) => state.choices.description)
  const list = useSelector((state) => state.choices.items)
  const dispatch = useDispatch()
  const endOfGame = list.length === 0;

  // If length of choices for user is more than 0, display direction buttons
  return (
    <GameWrapper>
      <TextBackground><h2>{description}</h2></TextBackground>
      {endOfGame && (
        <button
          type="button"
          onClick={() => window.location.reload()}>
        Play again
        </button>
      )}
      {list.map((choice) => (
        <div key={list.indexOf(choice)}>
          <Description><p>{choice.description}</p></Description>
          {console.log('list:', list)}
          {list && (
            <DirectionBtn
              type="button"
              onClick={() => dispatch(fetchGame(choice.direction, choice.type))}>
              {choice.direction}
            </DirectionBtn>
          )}
        </div>
      ))}
    </GameWrapper>
  )
}

const Description = styled.div`
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 10px;
  margin: 15px;
  padding: 10px;

  p {
    font-size: 20px;
  }
`

const TextBackground = styled(Description)`
margin-bottom: 60px;
`

const GameWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const DirectionBtn = styled.button`
  margin: 1rem;
  padding: 0.5rem;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 8px 0;
  font-size: 16px;
`