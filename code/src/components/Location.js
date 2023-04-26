/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { maze } from 'reducers/maze'
import Lottie from 'lottie-react'
import styled from 'styled-components';
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
      <SignsDiv>
        <Sign key={action.description}>
          <p>{action.description}</p>
          <button
            value={action.direction}
            type="button"
            onClick={((event) => chooseDirection(event.target.value))}>
            {action.direction}
          </button>
        </Sign>
      </SignsDiv>

    )
  })
  return (
    <div>
      {currentLocation.isLoading ? <Loading />
        : <div>
          <Sign>
            {currentLocation.description}
          </Sign>
          <Lottie style={{ width: '200px' }} animationData={compass} loop />
          {currentLocation.coordinates === '1,3' ? <FinalStep /> : null}
          {actionDirections}
        </div>}
    </div>
  )
}

export default Location

const SignsDiv = styled.div`
display: flex;
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