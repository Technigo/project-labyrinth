/* eslint-disable react/jsx-closing-tag-location */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { maze } from 'reducers/maze'
import Lottie from 'lottie-react'
import styled from 'styled-components'
import TypeIt from 'typeit-react'
import { MakeMove } from './MakeMove'
import { FinalStep } from './FinalStep'
import { Loading } from './Loading'
import compass from '../lotties/compass.json'
import woodenSign from '../images/plank.jpg'
import { Button } from './Buttons'

const Location = () => {
  const currentLocation = useSelector((store) => store.maze)
  const dispatch = useDispatch()

  const actionDirections = currentLocation.actions.map((action) => {
    const chooseDirection = (direction) => {
      dispatch(maze.actions.setDirection(direction))
      dispatch(MakeMove())
    }
    return (
      <div>
        <Sign key={action.description} className={action.direction}>
          <p>{action.description}</p>
          <Button
            value={action.direction}
            type="button"
            onClick={((event) => chooseDirection(event.target.value))}>
            {action.direction}
          </Button>
        </Sign>
      </div>

    )
  })
  return (
    <div>
      {currentLocation.isLoading ? <LoadingDiv><Loading /></LoadingDiv>
        : <LocationsDiv>
          <TypeIt options={{ speed: 50, cursor: false }}>
            <LocationText>
              {currentLocation.description}
            </LocationText>
          </TypeIt>
          <CompassSquare>
            <Lottie style={{ width: '200px', position: 'relative' }} animationData={compass} loop />
            {currentLocation.coordinates === '1,3' ? <FinalStep /> : null}
            <SignsDiv>
              {actionDirections}
            </SignsDiv>
          </CompassSquare>
        </LocationsDiv>}
    </div>
  )
}

export default Location

const LoadingDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`

const LocationsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const CompassSquare = styled.div`
border: solid pink 3px;
display: flex;
position:relative;
align-items: center;
justify-content:center;
border-radius: 50%;
`

const SignsDiv = styled.div`
display: flex;
flex-direction: row;
`

const Sign = styled.div`
border-radius: 8px 30px 90px 60px;
padding: 8px 30px;
width: 400px;
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${woodenSign});
background-size: cover;
font-size: 30px;
text-shadow: 1px 1px grey;
box-shadow: 2px 6px 6px 2px black;
margin: 10px;

&.North {
  position: absolute;
  top: 0;
  right: calc(50%);
}

&.South {
  position: absolute;
  bottom: 0;
  right: calc(50%);
}

&.East {
  position: absolute;
  right: calc(-10%);
  top: calc(40%);
}

&.West {
  position: absolute;
  top: calc(50%);
  left: 0;
}
`

const LocationText = styled.div`
font-size: 24px;
padding: 10px;
`