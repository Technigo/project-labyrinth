/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-shadow */
import React from 'react';
import styled from 'styled-components/macro';
import { useSelector, useDispatch } from 'react-redux';
import { Btnstyling } from './Buttons';
import victor from './victor.jpg'
// reducers
import { nextStep } from '../reducers/labyrinth';

const Labyrinth = () => {
  const { description, actions } = useSelector((store) => store.labyrinth.currentPosition)
  const dispatch = useDispatch()
  const handleButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction));
  };

  const PlayGame = ({ description, type, direction }) => (
    <Content>
      <Clues>{description}</Clues>
      <Btnstyling
        type="button"
        onClick={() => handleButtonClick(type, direction)}>
        {type} {direction}
      </Btnstyling>
    </Content>
  );

  return (
    <Background>
      <InnerWrapperLabyrinth>
        <Descriptiontext>{description}</Descriptiontext>
        {actions.length > 0
          && actions.map((game) => (
            <PlayGame key={game.direction} {...game} />
          ))}
        {actions.length === 0 && <Emoji>🌟</Emoji>}
      </InnerWrapperLabyrinth>
    </Background>
  );
};

export default Labyrinth;

const Background = styled.div`
  background-image: url(${victor});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const InnerWrapperLabyrinth = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgba(247, 204, 172, 0.7);
padding: 10px;
border-radius: 20px;
border: 2px solid #3A3845;
@media (min-width: 668px) and (max-width: 1024px) {
  width: 70%;
}
@media (min-width: 1025px) {
  width: 80%;
}
`

const Content = styled.div`
height: auto;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5px;
margin-bottom: 20px;
border: 1px dotted #826F66;
border-radius: 7px;
padding: 0px 10px 5px 10px;
`

const Descriptiontext = styled.h2`
font-family: 'Fondamento', cursive;
font-size: 20px;
text-align: center;
padding: 15px 5px;

@media (min-width: 668px) and (max-width: 1024px) {
font-size: 30px;
}
@media (min-width: 1025px) {
font-size: 35px;
}
`

const Clues = styled.p`
text-align: center;
padding-top: 15px;
font-size: 12px;
font-weight: 600;
font-family: 'Montserrat', sans-serif;

@media (min-width: 668px) and (max-width: 1024px) {
font-size: 16px;
}
@media (min-width: 1025px) {
font-size: 20px;
}
`

const Emoji = styled.span`
font-size: 50px;
`