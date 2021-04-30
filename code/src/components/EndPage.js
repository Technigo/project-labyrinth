import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components'; 

export const EndPage = () => {
  const currentState = useSelector((state) => state)

const Container = styled.div`
    width: 900px;
    height: 350px;
    margin-top: 50px;

    @media (max-width: 768px) {
      height:420px;
      margin-top: 20px;
     };
    `

  return (
    <Container className="nes-container is-dark with-title">
        <i class="nes-icon trophy is-large"></i>
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