import React from 'react';
import styled from 'styled-components/macro'
/* import Background from '../assets/background-img.jpg' */
import PaperScroll from '../assets/paper-scroll.png'
import { OuterWrapper, InnerWrapper } from '../utils/GlobalStyle'

const GameBoard = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Scroll>
          <EventText> All of the text will be here</EventText>
        </Scroll>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default GameBoard;

const Scroll = styled.div`
background-image: url(${PaperScroll});
background-repeat: no-repeat; 
background-size: contain;
/* object-fit: contain; */
background-position: center center;
height: 100%;
width: 50%;
text-align: center;
`;

const EventText = styled.p`
margin: 0 auto;
padding: 50% 0;
`;
