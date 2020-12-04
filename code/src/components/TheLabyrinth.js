import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components/macro"

import { Button } from '../lib/Button'
import { CardContainer } from '../lib/Containers'
import { Thumbnail } from '../components/Thumbnail'
import { Wrapper } from '../lib/Containers'
import { fetchActionData } from '../reducers/thunk'
import { game } from '../reducers/game'
import { LoadingIndicator } from './LoadingIndicator'

const Coordinates = styled.p`
  font-size: 1.3rem;
  text-align: center;
  font-weight: 500;
  background: linear-gradient(180deg, rgba(255,253,240,0.8), rgba(240,231,209, 1), rgba(255,253,240,0.8));

  @media (min-width: 768px) {
    font-size: 1.7rem;
  }

  @media(min-width: 1024px) {
    font-size: 2.5rem;
  }
`

const ImageAndDescriptionWrapper = styled.div`
  display: flex;

  @media(min-width: 1024px) {
    margin: 90px 0 0 0;
  }
`

const DescriptionWrapper = styled.div`
  background: #fff;
  text-align: center;
  border-radius: 5px;
  margin: 0 30px 20px 0;
`

const RoomDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  padding: 5px;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media(min-width: 1024px) {
    font-size: 1.8rem;
  }
`

const DirectionDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  padding: 10px;
  margin: 5px;

  @media (min-width: 768px) {
    font-size: 1.3rem;
    text-align: justify;
    }
`

export const TheLabyrinth = () => {
  const gameData = useSelector(state => state.game.all.data)
  const username = useSelector(state => state.game.username)
  const pastMove = useSelector(state => state.game.pastActions)

  const isLoading = useSelector(state => state.ui.isLoading)

  const carddeck = true
  const movedeck = true
  const moveBtn = true

  const dispatch = useDispatch()

  const handleActionClick = (type, direction) => {
    dispatch(fetchActionData(username, type, direction))
    dispatch(game.actions.setPastActions(direction))
  }

  const displayLastMove = () => {
    const i = pastMove.length-1
    return <RoomDescription>You moved {pastMove[i]}</RoomDescription>
  }

  if (isLoading) {
    return (
      <CardContainer>
        <LoadingIndicator />
      </CardContainer>
    )
  } else {
    return (
      <>
        <CardContainer carddeck={carddeck}>
          <Coordinates>Coordinates: {gameData.coordinates}</Coordinates>
          <ImageAndDescriptionWrapper>
            <Thumbnail />
            <DescriptionWrapper>
              {pastMove.length > 0 && displayLastMove()}
              <RoomDescription>"{gameData.description}"</RoomDescription>
            </DescriptionWrapper>
          </ImageAndDescriptionWrapper>
        </CardContainer>
        <Wrapper>
          {gameData.actions.map(item => (
            <CardContainer key={item.direction} movedeck={movedeck}>
              <DirectionDescription>{item.description}</DirectionDescription>
              <Button moveBtn={moveBtn} onClick={() => handleActionClick(item.type, item.direction)}>
                Head {item.direction}
              </Button>
            </CardContainer>
          ))}
        </Wrapper>
      </>
    )
  }
}


