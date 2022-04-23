import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { generateAction } from '../reducers/games';

const GameWrapper = styled.div`
  background-color: darkgreen;
  padding: 20px;
  font-size: 20px;
`

const DirectionButton = styled.button`
  border: none;
  background-color: lightgreen;
  border-radius: 50px;
  margin-bottom: 20px;
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

    console.log(description)
    console.log(actions)

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
          <div style={{borderBottom: '10px dotted white', color: 'white'}}>
            <h1>{description}</h1>
            {direction !== '' && <p>You chose to go: {direction}</p>}          
          </div>
          {actions && 
          actions.map(content => 
              <div key={Math.random()} style={{borderBottom: '5px dotted white', color: 'lightgreen'}}>
                <p style={{fontWeight: 'bold'}}>Alternative way:</p>
                <p>{content.direction}</p>   
                <p>{content.description}</p>  
                <span>
                  {content.direction === 'East' && eastBtn}
                  {content.direction === 'South' && southBtn}
                  {content.direction === 'West' && westBtn}
                  {content.direction === 'North' && northBtn}
                </span>
              </div>)
          }          
          <p>{(actions && actions.length === 0) && <p style={{color: 'white'}}>Congrats you've made it to the end</p>}</p>
      </GameWrapper>  
  )
};

export default GameScreen;