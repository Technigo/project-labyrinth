/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable function-paren-newline */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
import React, { useEffect } from 'react';
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { gameAction } from 'reducers/game';
// eslint-disable-next-line import/no-cycle
// import StartScreen from './StartScreen';
import { GiMorgueFeet } from 'react-icons/gi'
import Summary from './Summary';



const GameContainer = styled.section`
color: white;
padding-top: 10%;
padding-bottom: 10%;
background-image: url('https://images.pexels.com/photos/2499862/pexels-photo-2499862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
background-size: cover;     /*covering the the page with the whole picture,meaning no partials*/
@media (min-width: 668px) and (max-width: 1023px){
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 15%;
padding-bottom: 15%;
  }

  @media (min-width: 1024px){
  margin-left: 15%;
  margin-right: 15%;
  padding-top: 20%;
padding-bottom: 20%;
  }
`

const Welcome = styled.p`
color: white;
font-size: 12px;
text-align: left;
`
const ButtonDirection = styled.button`
background: transparent;
border: none;
color: white;
border-radius: 8px;
display: inline-block;
width:120px;
padding: 1%;
box-shadow: 0px 1px 16px yellow;
letter-spacing: 3px;
font-weight: 500;
margin: 2%;
cursor: pointer;

@media (min-width: 668px) and (max-width: 1023px){
  font-size: 14px;
  }

  @media (min-width: 1024px){
  font-size: 16px;
  }
`

const Description = styled.div`
margin-bottom: 10%;
color: yellow;
font-weight: 500;
font-size: 18px;
margin-left:2%;
margin-right:2%;

  @media (min-width: 668px) and (max-width: 1023px){
  font-size: 24px;
  }

  @media (min-width: 1024px){
  font-size: 26px;
  }
`

const Direction = styled.div`
font-size: 16px;
background-color: rgba(0,0,0,0.7);
padding:4%;
margin-left:4%;
margin-right:4%;
margin-bottom: 3%;
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
    <GameContainer>
      <div>
        <Description> 
          &quot; {x.description}&quot;
        </Description>
          {isCompleted ? (<Summary />)
          : (x && x.actions.map((item) => 
            <Direction>
              <p>{item.description} </p>
            <ButtonDirection
             type="button" onClick={() => setNext(item)}> <GiMorgueFeet /> {item.direction}
           </ButtonDirection>
        </Direction>
        ))}
        </div>
      <Welcome>Current player: {name}</Welcome> 
    </GameContainer>
  )
}

export default TheLabyrinth