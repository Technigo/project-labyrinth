import { useSelector } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: space-between;
  padding: 10px 10px 30px 10px;
  width: 100%;
  align-items: center;
  background-color: #1c1a1a;
`;

const ThankYou = styled.h2`
  color: white;
`;

const Item = styled.p`
  color: white;
  margin: 0;
`;

const Text = styled.p`
  color: white;
  margin: 0;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #1f9cee;
  border: none; 
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  width: fit-content;
  cursor: grab;
  border-radius: 10px;
  :hover {
    box-shadow: 0px 0px 15px -2px #1f9cee;
  }
`;


export const SummaryPage = ({ description }) => {
  const history = useSelector(store => store.game.history);
  const username = useSelector(store => store.game.userName);
  
  return (
    <Container>
      <ThankYou>Thank you {username} for playing.</ThankYou>
      <Text>{description}</Text>
      <Text>This is the path you took:</Text>
      {history.map((item, index) => (
        <div key={index}>
          {item.actions.map((direction, index) => (
            <Item key={index}>
              {direction.direction === "West" ? <FaArrowRight /> : ""} 
              {direction.direction === "North" ? <FaArrowUp /> : ""}
              {direction.direction === "East" ? <FaArrowLeft /> : ""} 
              {direction.direction === "South" ? <FaArrowDown /> : ""}
              {direction.direction}
            </Item>
      ))}
        </div>
    ))}
      <Button onClick={() => window.location.reload()}>RESTART</Button>
    </Container>
  )
}

