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
  font-family: 'Roboto', sans-serif;
`;

const Item = styled.p`
  color: white;
  margin: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

const Text = styled.p`
  color: white;
  margin-bottom: 15px;
`;


const Button = styled.button`
  background-color: #34623F;
  font-family: 'Roboto', sans-serif;
  border: none; 
  color: white;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  width: fit-content;
  cursor: grab;
  border-radius: 10px;
  margin-top: 20px;
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
            <Item key={index}>
                {item === "West" ? <FaArrowRight /> : ""} 
                {item === "North" ? <FaArrowUp /> : ""}
                {item === "East" ? <FaArrowLeft /> : ""} 
                {item === "South" ? <FaArrowDown /> : ""}
              {item}
            </Item>
        </div>
    ))}
      <Button onClick={() => window.location.reload()}>RESTART</Button>
    </Container>
  )
}

