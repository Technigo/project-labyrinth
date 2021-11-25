import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { game, gamePlay } from '../reducers/game'
import Compass from './Compass'

const GamePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: -1;
  justify-content: start;
  background-image: url('/assets/background.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  `
  const ContentWrapper = styled.div`
  text-align: center;
  margin:0 auto; 
  display:block;
  `
 const HeaderWrapper = styled.div`
  h3{
    font-weight: 250;
    font-size: 20px;
    padding: 10px;
    margin:0 px;
  }
  `
  const CompassContainer = styled.div`
  padding: 0 0 0 100px;
  `

  const DirectionWrapper = styled.div`
   margin:0 auto; 
   padding: 10px;
   display:block;
   text-align: center;
   background-color: rgba(255, 255, 255, 0.9);
   z-index: 1;

   h3{
    font-weight: 600;
    font-size: 18px;
   }
  
   button {
    width: 50vw;
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 700;
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    /* margin: 10px 100px 10px 100px; */
    /* margin: 20px 20px 0px 40px; */
    font-family: 'Special Elite', cursive;
  }
  `

export const GameStartPage = () => {
  const dispatch = useDispatch()
  // const directionComp = useSelector(
  //   (store) => store.game.gameStatus.actions.direction
  // )
  const gameStatus = useSelector((store) => store.game.gameStatus)
  const username = useSelector((store) => store.game.username)
  const actions = useSelector((store) => store.game.gameStatus.actions)
  // const { coordinates } = useSelector((store) => store.game.gameStatus)
  // const prevDir = useSelector((store) => store.game.history)

  const compassDirection = () =>
    actions.map((item) => {
      if (item.direction === 'East') {
        return "url('./assets/comp_east.svg')"
      } else if (item.direction === 'West') {
        return "url('./assets/comp_west.svg')"
      } else if (item.direction === 'South') {
        return "url('./assets/comp_south.svg')"
      } else {
        return "url('./assets/comp_north.svg')"
      }

      // return <h1>{item.direction}</h1>
    })

  // const compassDirection = () => {
  //   switch (gameStatus.coordinates) {
  //     case '0,0':
  //       "url('./assets/comp_north.svg')"
  //       break
  //     case '1,1':
  //       "url('./assets/comp_north.svg')"
  //       break
  //     case '2,0':
  //       "url('./assets/comp_north.svg')"
  //       break
  //     case '3,0':
  //       "url('./assets/comp_north.svg')"
  //       break
  //     case '1,0':
  //       "url('./assets/comp_west.svg')"
  //       break
  //     case '0,1':
  //       "url('./assets/comp_east.svg')"
  //       break
  //     case '3,1':
  //       "url('./assets/comp_east.svg')"
  //       break
  //     default:
  //       break
  //   }
  //   // if (
  //   //   gameStatus.coordinates === '0,0' ||
  //   //   gameStatus.coordinates === '1,1' ||
  //   //   gameStatus.coordinates === '2,0' ||
  //   //   gameStatus.coordinates === '3,0'
  //   // ) {
  //   //   return "url('./assets/comp_north.svg')"
  //   // } else if (gameStatus.coordinates === '1,0') {
  //   //   return "url('./assets/comp_west.svg')"
  //   // } else if (
  //   //   gameStatus.coordinates === '0,1' ||
  //   //   gameStatus.coordinates === '3,1'
  //   // ) {
  //   //   return "url('./assets/comp_east.svg')"
  //   // }

  //   // return <h1>{item.direction}</h1>
  // }
  // const imageUrl = {
  //   '0,0': "url('./assets/comp_north.svg')",
  //   '1,1': "url('./assets/comp_north.svg')",
  //   '2,0': "url('./assets/comp_north.svg')",
  //   '3,0': "url('./assets/comp_north.svg')",
  //   '1,0': "url('./assets/comp_west.svg')",
  //   '0,1': "url('./assets/comp_east.svg')",
  //   '3,1': "url('./assets/comp_east.svg')"
  // }

  // console.log(item.direction))
  return (
    <>
    <GamePageContainer>
      <ContentWrapper>
      <HeaderWrapper>
        {actions.length === 1 && <h1>Hello Adventurer {username.username}!</h1>}
        <h3>{gameStatus.description}</h3>
      </HeaderWrapper>
      <CompassContainer>
      {/* {actions && compassDirection()} */}
      {actions && console.log('actions: ', actions, 'length: ', actions.length)}
      <Compass image={compassDirection()} />
      {/* <Compass image={imageUrl[coordinates]} /> */}
      </CompassContainer>
      <DirectionWrapper>
      {actions.map((item) => (
        <div key={item.description}>
          <h3>{item.description}</h3>
          <button
            value={item.direction}
            onClick={() => dispatch(gamePlay(username, item.direction))}>
            {item.direction}
          </button>
        </div>
      ))}
      {actions.length === 0 && (
        // <h1>You have arrived!<h1/>
        <button onClick={() => dispatch(game.actions.restart())}>
          Restart game?
        </button>
      )}
      </DirectionWrapper>
      </ContentWrapper>
      </GamePageContainer>
    </>
  )
}
export default GameStartPage
