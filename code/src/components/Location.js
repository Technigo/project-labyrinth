/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { maze } from 'reducers/maze'
import Lottie from 'lottie-react'
import styled from 'styled-components/macro'
import TypeIt from 'typeit-react'
import { MakeMove } from './MakeMove'
import { FinalStep } from './FinalStep'
import { Loading } from './Loading'
import compass from '../lotties/compass.json'
import woodenSign from '../images/plank.jpg'
import { Button } from './Buttons'
import ship from '../lotties/ship'

const Location = () => {
  const currentLocation = useSelector((store) => store.maze)
  const dispatch = useDispatch()
  const [clickCount, setClickCount] = useState(0)

  const actionDirections = currentLocation.actions.map((action) => {
    const chooseDirection = (direction) => {
      dispatch(maze.actions.setDirection(direction))
      dispatch(MakeMove())
      setClickCount(0)
    }

    const handleClicks = () => {
      if (clickCount === 0) {
        console.log(currentLocation)
        setClickCount(1)
      } else {
        chooseDirection(event.target.value);
      }
    }

    return (
      <>
        <Sign className={action.direction}>
          <Button
            value={action.direction}
            type="button"
            onClick={((event) => handleClicks(event.target.value))}>
            {action.direction}
          </Button>
        </Sign>
        <div>
          {clickCount === 1
            && <LocationSign className={action.direction}>
              {action.direction}
              <DirectionsP>
                {action.description}
              </DirectionsP>
            </LocationSign>}
        </div>
      </>
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
            {currentLocation.coordinates === '1,3' ? <Lottie style={{ width: '200px', margin: 'auto' }} animationData={ship} loop /> : <Lottie style={{ width: '150px', position: 'relative' }} animationData={compass} loop />}
            {actionDirections}
          </CompassSquare>
          {currentLocation.coordinates === '1,3' ? <FinalStep /> : null}
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
max-width: 600px;
height: 200px;
`

const LocationSign = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-image: url(${woodenSign});
background-size: cover;
width: 160px;
margin: 10px;
padding: 4px 6px;
box-shadow: 2px 6px 6px 2px black;
text-shadow: 0px 1px whitesmoke;

&.North, &.South{
  position:absolute;
  right: calc(-20%);
  bottom: calc(-100%);
  border-radius: 30px 60px 50px 20px;
}

&.West, &.East {
  position: absolute;
  left: calc(-20%);
  bottom: calc(-100%);
  border-radius: 30px 25px 40px 2px;
}
`

const LocationText = styled.div`
font-size: 18px;
padding: 10px;
color: whitesmoke;
text-shadow: black 2px 1px;
`

const DirectionsP = styled.p`
font-size: 16px;
color: whitesmoke;
text-shadow: black 1px 1px;
margin: 0;
`

const CompassSquare = styled.div`
display: flex;
position:relative;
top: calc(0%);
align-items: center;
justify-content:center;
border-radius: 50%;
min-width: 250px;
min-height: 250px;
`

const Sign = styled.div`
padding: 8px 8px;
width: fit-content;
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
  top: calc(0%);
  right: calc(30%);
  border-radius: 8px 30px 90px 60px;
}

&.South {
  position: absolute;
  bottom: calc(-5%);
  left: calc(30%);
}

&.East {
  position: absolute;
  top: calc(40%);
  right: calc(-20%);
  border-radius: 40px 4px 50px 10px;
}

&.West {
  position: absolute;
  top: calc(40%);
  left: calc(-20%);
  border-radius: 20px 0px 8px 20px;
}
`

