import React from "react";
import start from "reducers/start";
import game from "reducers/game";
import { PageContainer } from "./StartPage";
import styled from "styled-components";
import { useSelector } from "react-redux";

const PathDescription = styled.h2`
  text-align: center;
  line-height: 30px;
`;

//testing testing

const GamePage = () => {
  const response = useSelector((store) => store.start.response);
  const coordinates = useSelector((store) => store.start.response.coordinates);

  return (
    <PageContainer>
      <PathDescription>{response.actions}</PathDescription>
    </PageContainer>
  );
};

export default GamePage;
