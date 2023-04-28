// eslint-disable-next-line max-len
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux'
import { CardContainer, LocationText, SingleChoice } from './GlobalStyles'

export const FinalPage = () => {
  const game = useSelector((store) => store.game.gameStep)
  const username = useSelector((store) => store.game.username)

  return (

    <CardContainer>
      <LocationText>{game.description}</LocationText>
      <SingleChoice>Congratulations, {username}, you have made it out of the rabbit hole!</SingleChoice>

      {/* <button /> */}
    </CardContainer>
  )
}