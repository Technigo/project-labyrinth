import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

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
    <>
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

    </>
  )
}

export default Summary