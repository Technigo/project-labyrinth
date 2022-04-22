import React from "react";
import { useSelector } from "react-redux";
import styled from 'styled-components';

const EndContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 5rem 0;
`;

const Text = styled.p`
  font-size: 0.75rem;
  background-color: #f7f7f7;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  border: solid 3px #43b047;
  @media (min-width: 800px){
    font-size: 1rem;
  }
  @media (min-width: 1020px){
    font-size: 1.25rem;
  }
`;

const Button = styled.button`
  width:100%;
  margin-top: 0.5rem;
  color: #f7f7f7;
  background-color: #049cd8;
  border: none;
  padding: 0.5rem 2rem;
`;

export const EndPage = () => {

  const username = useSelector((store) => store.game.username);

  return (
    <EndContainer>
      <Text>{username}</Text>
      <Text>You did it!!!</Text>
      <Button onClick={() => window.location.reload()}>
        PLAY AGAIN
      </Button>     

    </EndContainer>
  );
};
