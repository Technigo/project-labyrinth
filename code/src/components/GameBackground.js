import React from 'react'
//import { useSelector } from 'react-redux'
import styled from "styled-components/macro"

// const BackgroundImage = styled.img`
 
// `;
//background-image: url(${(props) => props})
const GameContainer = styled.section`
  width: 100vw;
  //min-height: 100vh;
  height: auto;
  background: ${(props) => props.background || '#d3947a'};
  
`
//current coordinates should be {gameData.coordinates}?
export const GameBackground = () => {
  //const gameData = useSelector(state => state.game.all.data)

  // Here I want to have an if-statement 
  // or switch statement to render different
  // background-images depending on current coordinates.
  // So f.ex: 
  // no coordinates  = starting screen -> pic of labyrinth
  // if ({!gameData.coordinates})
  return (
    <GameContainer
    // background={'../assets/archway.jpg'}
    />
  )
  
  // if (gameData.coordinates === "0,0") // -> pic of archway
  // if (gameData.coordinates === "1,0") //-> pic of lightrays through ceiling
  // if (gameData.coordinates === "1,1") //-> pic of cavern walls (bright & colorful)
  // if (gameData.coordinates === "0,1") //-> pic of large room with mechanical mess on floor
  // if (gameData.coordinates === "0,2") //-> pic of something colorful
  // if (gameData.coordinates === "0,3") //-> pic of chest or whirling papers
}
