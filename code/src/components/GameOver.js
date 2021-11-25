import React from "react";
import { useDispatch } from "react-redux";
import { quest } from "reducers/quest";
import styled from "styled-components";
import { Header } from "./LandingPage";
import { LandingContainer } from "./LandingPage";

const SmallerHeader = styled.h2`
  font-family: "Roboto Condensed", sans-serif;
  margin-bottom: 60px;
  color: white;
  font-size: 24px;
  @media (min-width: 768px) {
    font-size: 44px;
    margin-bottom: 70px;
  }
`;

export const Btn = styled.button`
  display: flex-block;
  font-family: "Bebas Neue", cursive;
  align-self: ${(props) => props.alignSelf};
  letter-spacing: 2px;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: ${(props) => props.borderRadius}px;
  color: ${(props) => props.color};

  margin-top: ${(props) => props.marginTop}px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 10px;
  font-weight: bolder;
  font-size: ${(props) => props.fontSize}px;
  margin-bottom: 5px;

  cursor: pointer;
  transition: 0.5s ease;
  background-color: transparent;
  backdrop-filter: blur(10px);

  &:hover {
    color: ${(props) => props.colorHover};
    background-color: transparent;
    border: 1px solid ${(props) => props.borderColorHover};
    transform: scale(1.1);
  }
  @media (min-width: 768px) {
    width: ${(props) => props.widthMedia}px;
    font-size: ${(props) => props.fontMedia}px;
    height: ${(props) => props.heighMedia}px;
    margin-top: ${(props) => props.marginTopMedia}px;
  }
`;

export const GameOver = () => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(quest.actions.resetGame());
  };

  return (
    <>
      <LandingContainer heightMedia={450}>
        <Header marginBottom={10}>This journey is complete!</Header>
        <SmallerHeader>...many others yet to come.</SmallerHeader>
        <Btn
          alignSelf={"center"}
          borderRadius={20}
          width={110}
          fontSize={16}
          height={50}
          marginTop={0}
          widthMedia={140}
          heighMedia={60}
          marginTopMedia={20}
          color={"white"}
          borderColor={"white"}
          borderColorHover={"white"}
          colorHover={"white"}
          fontMedia={20}
          onClick={onButtonClick}
        >
          Restart
        </Btn>
      </LandingContainer>
    </>
  );
};
