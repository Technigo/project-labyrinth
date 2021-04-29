import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'; 

export const EndPage = () => {
  const currentState = useSelector((state) => state)

const Container = styled.div`
    width: 900px;
    height: 300px;
    margin-top: 50px;

    @media (max-width: 768px) {
      height:400px;
      margin-top: 20px;
     };
    `

  return (
    <Container className="nes-container is-dark with-title">
        <p>{currentState.labyrinth.game.description}</p>
        <button 
        type="button" 
        className="nes-btn is-success" 
        onClick={() => window.location.reload()}> Restart 
        </button>
    </Container>
     
  );
};

// Flow ends.