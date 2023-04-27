import React from 'react';
import styled from 'styled-components';
import running from './img/running.gif';

const LoadingSection = styled.section`
display: flex;
height: 100vh;
background-color: green;
`

const LoadingText = styled.h1`
  color: black;
  font-family: "Press Start 2P";
  font-size: 30px;
  display: flex;
  align-items: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;


  @media (min-width: 770px) {
    font-size: 80px;
}`

export const Loading = () => {
  return (
    <LoadingSection>
      <LoadingText>LOADING...<img src={running} alt="running" /></LoadingText>
    </LoadingSection>
  )
}