import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import img from '../images/1347872.jpg'
import { nextStep } from '../reducers/game'
import { Button } from './Button'
import styled from 'styled-components'


export const InsideLabyrinth = () => {
  const { description, coordinates, actions } = useSelector(store => store.game.currentCoordinates)
  const dispatch = useDispatch()

  const handleButtonClick = (type, direction) => {
    dispatch(nextStep(type, direction))
  }

  const ActionCard = ({ description, type, direction }) => (
    <div className='action-card'>
      <p className='text-desc-two'>{description}</p>
      <Button onClick={() => handleButtonClick(type, direction)}>
        {type} {direction.toLowerCase()}
      </Button>
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
            <Button type="button" onClick={() => window.location.reload()}>Restart</Button>
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
}

.text-desc-one {
  border-bottom: 3px dashed orange;
  padding-bottom: 20px;
}

@media (min-width: 667px) {
  width: 60vw;
}
`