import React from "react";
import styled from "styled-components";

const LoadingText = styled.h1`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const LoadingPage = () => {
  return <LoadingText>Loading.....</LoadingText>;
};
