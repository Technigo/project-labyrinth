import { useSelector } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { SummaryContainer, ThankYou, Text, PathContainer, Arrow, Item, RestartButton } from "./Styling";

export const SummaryPage = ({ description }) => {
  const history = useSelector(store => store.game.history);
  const username = useSelector(store => store.game.userName);
  
  return (
    <SummaryContainer>
      <ThankYou>Thank you {username} for playing!</ThankYou>
      <Text>{description}</Text>
      <Text>This is the path you took:</Text>
      {history.map((item, index) => (
        <PathContainer key={index}>
          <Arrow>
            {item === "West" ? <FaArrowRight /> : ""} 
            {item === "North" ? <FaArrowUp /> : ""}
            {item === "East" ? <FaArrowLeft /> : ""} 
            {item === "South" ? <FaArrowDown /> : ""}
          </Arrow>
          <Item key={index}>
            {item}
          </Item>
        </PathContainer>
      ))}
      <RestartButton onClick={() => window.location.reload()}>RESTART</RestartButton>
    </SummaryContainer>
  )
}

