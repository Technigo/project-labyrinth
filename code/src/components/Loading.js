import React from 'react';
import styled from 'styled-components';
import running from './img/running.gif';
import loader from './img/loader.gif';
import './Loading.css';

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
  

  @media (min-width: 770px) {
    font-size: 80px;
}`

export const Loading = () => {
  return (
    <LoadingSection>
      <div className="loadingScreen">
        <LoadingText className="loadingText"><img className="loader" src={loader} alt="loader" /></LoadingText>
        <img className="runner" src={running} alt="running" />
      </div>
    </LoadingSection>
  )
}