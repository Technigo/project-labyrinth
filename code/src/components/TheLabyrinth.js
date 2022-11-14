/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { gameAction } from 'reducers/game';
// eslint-disable-next-line import/no-cycle
// import StartScreen from './StartScreen';
import { GiMorgueFeet } from 'react-icons/gi'
import Summary from './Summary';

const StartPage = styled.section`
color: green;
`
const Welcome = styled.h1`
color: white;
`
const ButtonDirection = styled.button`
background: transparent;
border: 1px solid white;
color: white;
border-radius: 10px;
margin: 4%;
padding: 2%;
border-style: none;
box-shadow: 4px 5px 13px rgba(46, 229, 157, 0.4);
letter-spacing: 2px;
font-weight: 500;
cursor: pointer;
`

const Description = styled.section`
border: 2px black;

`
const Direction = styled.div`
border: 2px black;
`

const TheLabyrinth = () => {
  const dispatch = useDispatch();
  const name = useSelector((store) => store.game.username);
  const x = useSelector((store) => store.game.description) // the next path
  const isCompleted = useSelector((store) => store.game.isCompleted) // completed actions

  const setNext = (item) => {
    dispatch(gameAction(item))
  }
  // const data = useSelector((store) => store.game.location);

  return (
    <StartPage>
      <Welcome>Welcome aboard {name}</Welcome>
      <div className="question-container">
        <h3>DIRECTION:</h3>
        <p>{x.description}</p>
        {isCompleted ? (<Summary />)
          : (x && x.actions.map((item) => <>
            <Description><p>{item.description}</p></Description>
            <Direction>
              <ButtonDirection type="button" onClick={() => setNext(item)}>NAV <GiMorgueFeet /> {item.direction}</ButtonDirection>
            </Direction>
          </>))}
      </div>
    </StartPage>
  )
}

export default TheLabyrinth