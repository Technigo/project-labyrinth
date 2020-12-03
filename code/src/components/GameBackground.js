import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components/macro"

import { 
  imgUrl_00,
  imgUrl_10,
  imgUrl_11,
  imgUrl_01,
  imgUrl_start
 } from '../lib/ImageUrls'

const GameContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  
  z-index: 0;
  background-size: cover;
  background-position: center;
  //background: ${(props) => props.background || '#d3947a'};
  background-image: url(${(props) => props.backgroundImage });
`

// height: 100vh;
//   width: 100vw;
//   flex-direction: column;
//   text-align: center;
//   background-size: cover;
//   background-position: center;
//   background-image: url(${(props) =>
//     props.coordinates === '1,3'

export const GameBackground = () => {
  const gameData = useSelector(state => state.game.all.data)
 console.log(gameData) //reads undefined on first page

  if (!gameData) {
    return (
      <GameContainer backgroundImage={imgUrl_start} />
    )
  } else if (gameData.coordinates === "0,0") {
    // -> pic of archway
    return (
      <GameContainer backgroundImage={imgUrl_00}/>
    )
  } else if (gameData.coordinates === "1,0") {
    //-> pic of lightrays through ceiling
    return (
      <GameContainer backgroundImage={imgUrl_10}/>
    )
  } else if (gameData.coordinates === "1,1") {
    //-> pic of cavern walls (bright & colorful)
    return (
      <GameContainer backgroundImage={imgUrl_11}/>
    )
  } else if (gameData.coordinates === "0,1") {
    //-> pic of large room with mechanical mess on floor
    return (
      <GameContainer backgroundImage={imgUrl_01}/>
    )
  } else if (gameData.coordinates === "0,2") {
    //-> pic of something colorful
    return (
      <GameContainer backgroundImage={imgUrl_00}/>
    )
  } else  if (gameData.coordinates === "0,3") {
    //-> pic of chest or whirling papers
    return (
      <GameContainer backgroundImage={imgUrl_00}/>
    )
  } else if (gameData.coordinates === "1,3") {
    //pic of in to the light
    return (
      <GameContainer backgroundImage={imgUrl_00}/>
    )
  } else return (
      <GameContainer backgroundImage={imgUrl_00} />
    )
}
