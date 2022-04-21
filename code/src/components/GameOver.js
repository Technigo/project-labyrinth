import React from "react";
import { CardContainer, Content, Title } from "./Styles";
import { useSelector } from "react-redux";;


const GameOver = () => {
  const stage = useSelector(store => store.labyrinth.stage)
  
  return (
    <CardContainer>
      <Content>
        <Title>
          {stage.description}
        </Title>
      </Content>
    </CardContainer>
  )
}

export default GameOver;