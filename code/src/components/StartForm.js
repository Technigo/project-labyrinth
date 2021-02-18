import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'

import { LoadingIndicator } from 'components/LoadingIndicator'
import VideoBackground from './BgVideo'
import { startGame, addPlayer } from '../reducers/gameReducer'

export const StartForm = () => {
  const dispatch = useDispatch()
  const [player, setPlayer] = useState('')

  const handleStartGame = (playerName) => {
    dispatch(startGame(playerName))
    dispatch(addPlayer(playerName))
  }

  return (
    <Home>
      <VideoBackground />
      <LoadingIndicator />
      <Wrapper>
        <Title>Are you sure you want to do this?</Title>
        <Content>
          <Label
            htmlFor="playerId">
            Type your name to start
            <Input
              id="playerId"
              type="text"
              value={player}
              onChange={(event) => setPlayer(event.target.value)} />
          </Label>
          <Button
            type="button"
            disabled={player.length < 1}
            onClick={() => handleStartGame(player)}>
              Start Game
          </Button>
        </Content>
      </Wrapper>
    </Home>
  )
}

const Home = styled.main`
  align-items: center;
  background: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #ffffff;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  font-family: 'Mystery Quest', cursive;
  width: 100vw;
`
const Title = styled.h1`
  font-size: 30px;
  color: #222222;
  text-align: center;
  text-shadow: 1px 1px 1px #fff, 4px 4px 7px rgba(0,0,0,0.3);
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`
const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const Button = styled.button`
  background-color: #50055E;
  color: #ffffff;
  font-family: 'Mystery Quest', cursive;
  font-size: 18px;
  margin-top: 20px;
`
const Input = styled.input`
  font-size: 17px;  
  height: 30px;
  width: 200px;
`
const Label = styled.label`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 25px;
  gap: 15px;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.8);
`