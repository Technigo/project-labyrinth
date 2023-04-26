/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { maze } from 'reducers/maze'
import Lottie from 'lottie-react'
import styled from 'styled-components';
import TypeIt from 'typeit-react';
import { MakeMove } from './MakeMove'
import { FinalStep } from './FinalStep'
import { Loading } from './Loading'
import compass from '../lotties/compass.json'
import woodenSign from '../images/plank.jpg'

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
        <Sign key={action.description}>
          <p>{action.description}</p>
          <button
            value={action.direction}
            type="button"
            onClick={((event) => chooseDirection(event.target.value))}>
            {action.direction}
          </button>
        </Sign>
      </div>

    )
  })
  return (
    <div>
      {currentLocation.isLoading ? <Loading />
        : <LocationsDiv>
          <TypeIt options={{ speed: 50 }}>
            <LocationText>
              {currentLocation.description}
            </LocationText>
          </TypeIt>
          <Lottie style={{ width: '200px' }} animationData={compass} loop />
          {currentLocation.coordinates === '1,3' ? <FinalStep /> : null}
          <SignsDiv>
            {actionDirections}
          </SignsDiv>
        </LocationsDiv>}
    </div>
  )
}

export default Location

const LocationsDiv = styled.div`
display: flex;
flex-direction: column;
border: solid blue 2px;
align-items: center;
`

const SignsDiv = styled.div`
display: flex;
flex-direction: row;
`

const Sign = styled.div`
// border: solid 1px black;
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
`

const LocationText = styled.div`
border: solid black 2px;
font-size: 24px;
padding: 10px;
`