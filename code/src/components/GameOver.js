import React from "react";
import { CardContainer, Title, Gif } from "./Styles";
import { useSelector } from "react-redux";;


const GameOver = () => {
  const stage = useSelector(store => store.labyrinth.stage)
  
  return (
    <>
    <CardContainer>
        <Title>
          <p>{stage.description}</p>
        </Title>
    <Gif src='https://embed.lottiefiles.com/animation/53040'></Gif>
    </CardContainer>
    
    </>
  )
}

export default GameOver;