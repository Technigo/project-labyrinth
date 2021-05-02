import React from "react";
import styled, { keyframes } from "styled-components/macro";

import background from "../assets/background1.jpg";

const Loading = () => {
  return (
    <Container>
      <Flex>
        <ContentWrapper>
          <Clock>
            <CupTop>
              <Sand></Sand>
            </CupTop>
            <Cup>
              <SandDelayed></SandDelayed>
            </Cup>
          </Clock>
        </ContentWrapper>
      </Flex>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  background-position: center;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 290px;
  border: 1px dashed;
  padding: 20px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;

  @media (min-width: 768px) {
    max-width: 500px;
    height: 400px;
  }

  @media (min-width: 1024px) {
    max-width: 700px;
  }
`;

const clock = keyframes`
  0%{
    transform: rotate(0deg)
  }
  25%,50%{
    transform: rotate(180deg)
  }
  75%{
    transform: rotate(360deg);
  }
  100%{
    transform: rotate(360deg);
  }
`


const sand = keyframes`
  0%,100%{
    border-radius: 5%;
    transform: translate(35%,20%) rotate(45deg);
  }
  15%{
    border-radius:40%;
    transform: translate(0%,35%) rotate(-65deg) scale(1.5,1.5);
  }
  25%{
    border-radius:20%;
    transform: translate(-15%,35%) rotate(-90deg) scale(1.2,1.2);
  }
  50%{
    border-radius:5%;
    transform: translate(0%,0%) rotate(-90deg) scale(1,1);
    opacity: 1;
  }
  50.01%,64.99%{
    opacity: 0;
  }
  65%{
    border-radius:35%;
    transform: translate(20%,50%) rotate(30deg);
    opacity: 1;    
  }
  75%{
    border-radius:10%;
    transform: translate(35%,40%) rotate(45deg);
  }
`

const Clock = styled.div`
  background: white;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;/*
  margin: auto;*/
  box-shadow: inset 0 0 0 .25rem #aaa;
  flex-direction: column;
  animation: ${clock} 5s ease-in-out infinite;
`

const Cup = styled.div`
  background: #aaa; 
  height: 30%;
  width: 30%;
  border-radius: 50% 50% 0 0/ 100% 100% 0 0;
  overflow: hidden;
`

const CupTop = styled.div`
  background: #aaa; 
  height: 30%;
  width: 30%;
  border-radius: 50% 50% 0 0/ 100% 100% 0 0;
  overflow: hidden;
  transform: rotate(180deg);
`

const Sand = styled.div`
  background: #555;
  height: 150%;
  width: 150%;
  transform-origin: 0% 0%;
  animation: ${sand} 5s linear infinite -2.5s;
`
const SandDelayed = styled.div`
  background: #555;
  height: 150%;
  width: 150%;
  transform-origin: 0% 0%;
  animation: ${sand} 5s linear infinite -2.5s;
  animation-delay: 0s; 
`