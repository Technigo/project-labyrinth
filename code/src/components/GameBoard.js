import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { generateMoves } from 'reducers/game'
import styled from 'styled-components/macro';
import { Button } from './Button'
import Loading from './Loading'

const GameContainer = styled.div`
display: flex; 
position: relative; 
flex-direction:column; 
align-items: center;
border:2px solid red; 
background: #ffff;
margin: 5% 20%; 
justify-content: center;
`

export const GameBoard = () => {
  const currentLocation = useSelector((store) => store.game.currentLocation)
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ui.isLoading)

  return (
    <GameContainer>
      {isLoading && <Loading />}
      {!isLoading && (
        <div>
          <p>{currentLocation?.description} </p>
          {currentLocation?.actions?.map((action) => {
            return (
              <div key={action.direction}>
                <p>{action.description}</p>
                <Button onClick={() => dispatch(generateMoves(action.direction))}>
                  {action.direction}
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </GameContainer>
  )
}
