// eslint-disable-next-line max-len
/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux'
import Lottie from 'lottie-react';
import { CardContainer, LocationText, SingleChoice } from './GlobalStyles'
import animationData from '../lotties/running-rabbit.json';

export const FinalPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    renderer: 'svg',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const game = useSelector((store) => store.game.gameStep)
  const username = useSelector((store) => store.game.username)

  return (

    <CardContainer bgColor="rgb(226 212 26 / 0.4)">
      <LocationText>{game.description}</LocationText>
      <SingleChoice>Well done, {username}, you have found your way out of the rabbit hole!</SingleChoice>
      <Lottie
        animationData={defaultOptions.animationData}
        loop={defaultOptions.loop}
        autoplay={defaultOptions.autoplay}
        renderer={defaultOptions.renderer}
        rendererSettings={defaultOptions.rendererSettings}
        style={{ width: '300px', height: '300px' }} />
    </CardContainer>
  )
}

// const CardContainer final= styled.div