import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const SummaryContainer = styled.section`
color: white;
padding-top: 10%;
padding-bottom: 10%;

//background-image: url('https://images.pexels.com/photos/2499862/pexels-photo-2499862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
//background-size: cover;     /*covering the the page with the whole picture,meaning no partials*/

@media (min-width: 668px) and (max-width: 1023px){
  margin-left: 5%;
  margin-right: 5%;
  padding-top: 15%;
  padding-bottom: 15%;
}
  @media (min-width: 1024px){
  margin-left: 15%;
  margin-right: 15%;
  //padding-top: 20%;
  //padding-bottom: 20%;
}
`

const ButtonRestart = styled.button`
background: #093E3E;
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

const Summary = () => {
  const location = useSelector((store) => store.game.location) // completed actions

  const restart = () => {
    window.location.reload();
  }
  return (
    <SummaryContainer>
      <h2>TOTAL OF ROAD BUMPS</h2>
      {
        location.map((item) => {
          return (
            <div>{item.direction}</div>
          )
        })
      }
      <ButtonRestart
        type="button"
        onClick={restart}>Restart
      </ButtonRestart>

    </SummaryContainer>
  )
}

export default Summary