import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components/macro"

import { Button } from '../lib/Button'
import { CardContainer } from '../lib/Card'
import { Thumbnail } from '../components/Thumbnail'
import { Wrapper } from '../components/Main'
import { fetchActionData } from '../reducers/thunk'

const Coordinates = styled.p`
  font-size: 20px;
  text-align: center;
  background: #fff;
`

const ImageAndDescriptionWrapper = styled.div`
  display: flex;
`

const DescriptionWrapper = styled.div`
  background: #fff;
  text-align: center;
  border-radius: 5px;
  margin-right: 30px;
`

const RoomDescription = styled.p`
  font-size: 15px;
  text-align: center;
  padding: 5px;
  font-style: italic;
`
const DirectionDescription = styled.p`
  font-size: 15px;
  text-align: left;
  padding: 10px;
  margin: 5px;
`

export const TheLabyrinth = () => {
  const gameData = useSelector(state => state.game.all.data)
  const username = useSelector(state => state.game.username)

  const carddeck = true
  const movedeck = true

  const dispatch = useDispatch()

  // this is the actions found previously in button
  // updated thunk so it has the params of username, move, direction
  // so username, direction and type is not hardcorded into 'xxxx'
  const handleActionClick = (type, direction) => {
    dispatch(fetchActionData(username, type, direction))
  }

  return (
    <>
      <CardContainer carddeck={carddeck}>
        <Coordinates>Coordinates: {gameData.coordinates}</Coordinates>
        <ImageAndDescriptionWrapper>
        <Thumbnail />
        <DescriptionWrapper>
        <RoomDescription>"{gameData.description}"</RoomDescription>
        </DescriptionWrapper>
        </ImageAndDescriptionWrapper>
        <p>Maybe this should not be laying here though? You chose to go: {gameData.direction}</p>
        {/* //this was originally in Card */}
        {/* // The mapfunction needs to have a key */}
      </CardContainer>
      <Wrapper>
        {gameData.actions.map(item => (
          <CardContainer key={item.direction} movedeck={movedeck}>
            <DirectionDescription>{item.description}</DirectionDescription>
            <Button onClick={() => handleActionClick(item.type, item.direction)}>
              Head {item.direction}
            </Button>
          </CardContainer>
        ))}
      </Wrapper>
    </>
  )

  // 


}


