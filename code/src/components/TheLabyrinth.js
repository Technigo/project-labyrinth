import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components/macro"

import { Button} from '../lib/Button'
import { CardContainer } from '../lib/Card'
import { Thumbnail } from '../components/Thumbnail'
import { Wrapper } from '../lib/Main'
import { fetchActionData } from '../reducers/thunk'
import { game } from '../reducers/game'
import { LoadingIndicator } from './LoadingIndicator'

const Coordinates = styled.p`
  font-size: 20px;
  text-align: center;
  // background: #fff;
  // background: linear-gradient(180deg, #f0e7d1, #fffdf0, #f0e7d1, #f0e7d1);
  background: linear-gradient(180deg, rgba(255,253,240,0.8), rgba(240,231,209, 1), rgba(255,253,240,0.8));

  @media (min-width: 768px) {
    font-size: 30px;
    }
`

const ImageAndDescriptionWrapper = styled.div`
  display: flex;
`

const DescriptionWrapper = styled.div`
  background: #fff;
  text-align: center;
  border-radius: 5px;
  margin: 0 30px 20px 0;
`

const RoomDescription = styled.p`
  font-size: 16px;
  text-align: center;
  padding: 5px;
  font-style: italic;

  @media (min-width: 768px) {
  font-size: 24px;
  }
`
const DirectionDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  padding: 10px;
  margin: 5px;

  @media (min-width: 768px) {
    font-size: 20px;
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

  if (isLoading) {
    return (
      <LoadingIndicator />
    )
  } else {
    return (
      <>
        <CardContainer carddeck={carddeck}>
          <Coordinates>Coordinates: {gameData.coordinates}</Coordinates>
          <ImageAndDescriptionWrapper>
            <Thumbnail />
            <DescriptionWrapper>
              {console.log(pastMove)}
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


