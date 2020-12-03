import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'

// import HeroVideoDemo from './testing/BackgroundVideo'
import { LoadingIndicator } from 'components/LoadingIndicator'
import heroImage from '../assets/startImage.jpg'
import { gameReducer } from '../reducers/gameReducer'
import { ui } from '../reducers/ui'

// import VideoBackground from './BgVideo'

export const StartForm = () => {
  const playerName = useSelector((store) => store.gameReducer.playerName)
  const playerInputId = 'playerId'

  const dispatch = useDispatch()

  const handlePlayerName = (event) => {
    dispatch(gameReducer.actions.addPlayerName(event.target.value))
  }

  const startGame = () => {
    dispatch(ui.actions.setLoading(true))
    const body = JSON.stringify({ username: playerName })
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(gameReducer.actions.gameBegin(json))
        dispatch(ui.actions.setLoading(false))
      })
  }
  return (
    <Home imgUrl={heroImage}>
      <LoadingIndicator />
      <Wrapper>
        <Label
          htmlFor={playerInputId}>
          Type your name
          <Input
            id={playerInputId}
            type="text"
            value={playerName}
            onChange={(event) => handlePlayerName(event)} />
        </Label>
        <Button
          type="button"
          disabled={playerName.length < 1}
          onClick={() => startGame()}>
            Start Game
        </Button>
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
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  width: 100vw;
`

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  font-family: 'Mystery Quest', cursive;
  flex-direction: column;
`

const Button = styled.button`
  background-color: #50055E;
  color: #ffffff;
  font-family: 'Mystery Quest', cursive;
  font-size: 18px;
  margin-top: 20px;
  height: 40px;
  width: 120px;
`
const Input = styled.input`
  height: 30px;
  margin-top: 20px;
  width: 200px;
`
const Label = styled.label`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 25px;
`