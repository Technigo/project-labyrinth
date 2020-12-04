import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components/macro";

const dots = keyframes`
    0% {
    content: "";
  }
  25% {
    content: ".";
  }
  50% {
    content: "..";
  }
  75% {
    content: "...";
  }
  100% {
    content: "";
  }
`;

const Loader = styled.div`
  font-size: 24px;

  &::after {
    content: "...";
    animation-name: ${dots};
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  }
`;

export const Loading = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);
  return <>{isLoading && <Loader>Loading</Loader>}</>;
};
