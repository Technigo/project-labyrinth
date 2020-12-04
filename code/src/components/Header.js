import React from 'react'
import styled from "styled-components/macro"
import { useDispatch, useSelector } from 'react-redux'

import { game } from "reducers/game";
import { Button } from "lib/Button";

const HeaderWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  padding: 20px;
  justify-items: flex-start;
  margin-bottom: 30px;
`

const Title = styled.h1`
  text-transform: uppercase; 
  text-align: left; 
  font-size: 1.5rem;
  margin: 0;
  font-family: 'Monoton', cursive;

  @media (min-width: 768px) {
    font-size: 3.0rem;
  }

  @media(min-width: 1024px) {
    font-size: 3.5rem;
  }
`

export const Header = () => {
  const gameData = useSelector(state => state.game.all.data)
  const headerBtn = true
  const dispatch = useDispatch();

  const onHistoryBack = () => {
    dispatch(game.actions.historyGoBack());
  }

  return (
    <HeaderWrapper>
      <Title>THE LABYRINTH </Title>
      {gameData && <Button headerBtn={headerBtn} onClick={onHistoryBack}>
        Go back
    </Button>}
    </HeaderWrapper>
  )

}
