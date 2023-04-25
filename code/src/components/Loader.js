/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components/macro'

const LoaderSpan = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: animloader 1s linear infinite;
  margin: 10px;

@keyframes animloader {
  0% {
    box-shadow: -72px 0 #FFF inset;
  }
  100% {
    box-shadow: 48px 0 #FFF inset;
  } 
`

const Loading = styled.p`
color: ${(props) => props.color};
overflow:hidden;
border-right: .15em solid white;
white-space: nowrap;
margin: 0 auto;
letter-spacing: .15em;
animation:      typing 3.5s steps(40, end),     blink-caret .75s step-end infinite;

@keyframes typing {     from { width: 0 }     to { width: 100% }
@keyframes blink-caret {     from, to { border-color: transparent }     50% { border-color: white; }
`

const LoaderContainer = styled.div`
width: 100px;
height: 100px;
background-color: #263038;
padding: 2px;
margin: 20px;
`

export const Loader = ({ textColor }) => {
  return (
    <LoaderContainer>
      <LoaderSpan />
      <Loading color={textColor}>Loading...</Loading>
    </LoaderContainer>
  )
}