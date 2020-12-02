import React from 'react'
import styled from "styled-components/macro"


const BackgroundImage = styled.img`
 
`;


const GameContainer = styled.section`
  width: 100vw;
  height: auto;
  background-image: url(${(props) => props})
`

export const GameBackground = () => {

  // Here I want to have an if-statement 
  // or switch statement to render different
  // background-images depending on current coordinates.
  // So f.ex: 
  // no coordinates  = starting screen -> pic of labyrinth
  // coordinates: "0,0" -> pic of archway
  // coordinates: "1,0" -> pic of lightrays through ceiling
  // coordinates: "1,1" -> pic of cavern walls (bright & colorful)
  // coordinates: "0,1" -> pic of large room with mechanical mess on floor
  // coordinates: "0,2" -> pic of something colorful
  // coordinates: "0.3" -> pic of chest or whirling papers

}
