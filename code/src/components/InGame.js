import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { nextStep } from 'reducers/game'

import Summary from './Summary'
import Loading from './Loading'

const InGameContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  margin: 30px;

`
const ActionContainerWrapper = styled.div`
  @media (min-width: 900px) {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
} 
`

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: radial-gradient(circle, rgba(15,103,72,1) 0%, rgba(5,50,16,1) 100%);
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;

  @media (min-width: 900px) {
    width: 30%;
  } 
`

const MainContent = styled.div`
  height: 100vh;
  background: black;

  @media (max-width: 332px) {
    font-size: 12px;
  }
`

const Button = styled.button`
    margin-top:5px;
    background-color:rgb(62, 136, 62);
    padding:10px;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    border: none;
`

const InGame = () => {
  const direction = useSelector((store) => store.game.direction)
  const actions = useSelector((store) => store.game.direction.actions)
  const usernameFinal = useSelector((store) => store.game.username)
  const loading = useSelector(store => store.game.loading)
  const dispatch = useDispatch() 
  

  return (
    <InGameContainer>
      {loading && <Loading />}
      {!loading && (
        <MainContent>
          <p>{direction.description}</p>        
            <ActionContainerWrapper>
          { actions.map((action) => (
              <ActionContainer key={action.description}>
                <p>{action.description}</p>
                <Button 
                onClick={() => dispatch(nextStep(usernameFinal, action.direction))}>{action.direction}
                </Button>
              </ActionContainer>
            ))            
          }        
            </ActionContainerWrapper>
          {direction.coordinates === "1,3" && <Summary />}
        </MainContent>
        )}
    </InGameContainer>
  ) 
}

export default InGame