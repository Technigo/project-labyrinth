import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LoadingText = styled.h1`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const LoadingPage = () => {
  const loading = useSelector((state) => state.game.loader);

  return <>{loading && <LoadingText>Loading.....</LoadingText>}</>;
};
