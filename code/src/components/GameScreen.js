import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { generateAction } from '../reducers/games';

const GameWrapper = styled.div`
  margin-top: 100px;
  background-color: darkgreen;
  padding: 20px;
  font-size: 12px;
  width: 50vw;
  word-wrap: break-word;
  
  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1200px) {
    font-size: 20px;
  }
`
const ActionsDiv = styled.div`
  border-bottom: 5px dotted white;
  color: lightgreen;
`
const DescriptionDiv = styled.div`
  border-bottom: 10px dotted white;
  color: white;
`
const DirectionButton = styled.button`
  border: none;
  background-color: lightgreen;
  border-radius: 50px;
  margin-bottom: 20px;
`
const EndText = styled.p`
  color: white;
`

const GameScreen = () => {
    const dispatch = useDispatch();
    let [direction, setDirection] = useState('');

    const directionArray = [
      'East',
      'South',
      'West',
      'North'
    ]

    const description = useSelector(state => state.game.game.description)
    const actions = useSelector(state => state.game.game.actions)

    const onChooseDirection = (index) => {
      setDirection(directionArray[index])
      dispatch(generateAction(index));
    }

    let eastBtn = <DirectionButton onClick={() => onChooseDirection(0)}>Go east</DirectionButton>
    let southBtn = <DirectionButton onClick={() => onChooseDirection(1)}>Go south</DirectionButton>
    let westBtn = <DirectionButton onClick={() => onChooseDirection(2)}>Go west</DirectionButton>
    let northBtn = <DirectionButton onClick={() => onChooseDirection(3)}>Go north</DirectionButton>   

  return (
      <GameWrapper>
          <DescriptionDiv>
            <h1>{description}</h1>
            {direction !== '' && <p>You chose to go: {direction}</p>}          
          </DescriptionDiv>
          {actions && 
          actions.map(content => 
              <ActionsDiv key={Math.random()}>
                <p style={{fontWeight: 'bold'}}>Alternative way:</p>
                <p>{content.direction}</p>   
                <p>{content.description}</p>  
                <span>
                  {content.direction === 'East' && eastBtn}
                  {content.direction === 'South' && southBtn}
                  {content.direction === 'West' && westBtn}
                  {content.direction === 'North' && northBtn}
                </span>
              </ActionsDiv>)
          }          
          <p>{(actions && actions.length === 0) && <EndText>Congrats you've made it to the end</EndText>}</p>
      </GameWrapper>  
  )
};

export default GameScreen;