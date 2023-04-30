import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { Button } from 'lib/Button';
import { Player } from '@lottiefiles/react-lottie-player'
import { game } from '../reducers/game'
import animationData from '../lotties/fireworks'

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  min-width: 360px;
  max-width: 550px;
  padding: 5px;
`

const FireworksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledDescriptionText = styled.p`
  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  margin: 0px 5px 50px 5px;
  text-align: center;
`

const EndingPage = () => {
  const dispatch = useDispatch();

  const handleRestart = () => { dispatch(game.actions.restart()) }
  const currentResponse = useSelector((state) => state.game.response)

  return (
    <StyledContainer>
      <FireworksContainer>
        <Player
          autoplay
          controls
          loop
          mode="normal"
          src={animationData}
          style={{ height: '200px', width: '350px' }} />
      </FireworksContainer>
      <StyledDescriptionText>
        {currentResponse.description}
      </StyledDescriptionText>
      <Button
        type="button"
        onClick={() => handleRestart()}>
          Restart!
      </Button>
    </StyledContainer>
  );
}

export default EndingPage;