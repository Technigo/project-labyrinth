import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import img from '../images/1347872.jpg'

import { nextStep } from '../reducers/game'
/* import { LoadingIndicator } from './LoadingIndicator' */

export const InsideLabyrinth = () => {
  const { description, coordinates, actions } = useSelector(store => store.game.currentCoordinates)
  const history = useSelector((store) => store.game.history)
  const dispatch = useDispatch()

  /* const setBgColor = () => {
    let bg = 'silver'
    switch (coordinates) {
      case '0,0':
        bg = '#777777'
        break
      case '1,0':
        bg = '#808080'
        break
      case '1,1':
        bg = '#c6e2ff' 
        break
      case '0,1':
        bg = '#216045'
        break;
      case '0,2':
        bg = '#8191dd'
        break;
      case '0,3':
        bg = '#808080'
        break;
      case '1,3':
        bg = '#58AB6E'
        break;
      default:
        bg = '#102021'
    }
    return bg
  } */

  const handleButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction))
  }

  const ActionCard = ({ description, type, direction }) => (
    <div className='action-card'>
      <p className='text-desc-two'>{description}</p>
      {/* <p className='text choice'>What will you do?</p> */}
      <DirectionButton onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </DirectionButton>
    </div>
  )



  return (
    <LabyrinthBackground backgroundImage={img}>
        <InsideLabyrinthSection>
      
          <p className='text-coords'>
          Coordinates: <strong>{coordinates}</strong>.
          </p>
      
          {actions.length === 0 && <h2>You made it out alive, you brave soul.</h2>}
          <p className='text-desc-one'>{description}</p>

          <p className='text-choice'>What will you do?</p>

          {actions.length > 0 && actions.map(item => 
          <ActionCard key={item.direction} {...item} />
          )}

          {actions.length === 0 && (
            <button type="button" onClick={() => window.location.reload()}>Restart</button>
          )}
          
        </InsideLabyrinthSection>
    </LabyrinthBackground>
  )
}

//styling
const LabyrinthBackground = styled.div`
width: 100%;
height: 100vh;
overflow: hidden;
background-image: url("${props => props.backgroundImage}");
background-size: cover; 
background-repeat: no-repeat;
background-attachment: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const InsideLabyrinthSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: left;
padding: 20px;
margin: 0 auto;
width: 80vw;
height: auto;
background: #000000;
opacity: 0.7;

.text-coords {
  font-size: 12px;
  text-align: left;
}

.text-desc-one {
  border-bottom: 3px dashed orange;
  padding-bottom: 20px;
}

@media (min-width: 667px) {
  width: 60vw;
}
`
const DirectionButton = styled.button`
  background: #F2C409;
  margin: 0 auto;
  margin-top: 10px;
  cursor: pointer;
  display: block;
  position: relative;
  text-align: center;
  font-size: 12px;
  padding: 8px;
  text-decoration: none; 
  color: white;
  box-shadow: inset -3px -3px 0 0 #E59400;

  &:hover,
  &:focus {
    background: orange;
    box-shadow: inset (-3px*1.5) (-3px*1.5) 0 0  #E59400;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }

  &:before {
    top: -3px;
    left: 0;
    border-top: 3px #fff solid;
    border-bottom: 3px #fff solid;
  }

  &:after {
    left: -3px;
    top: 0;
    border-left: 3px #fff solid;
    border-right: 3px #fff solid;
  }
`

