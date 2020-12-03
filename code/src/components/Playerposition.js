import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

export const Playerposition = () => {
    const startPosition = useSelector( store => store.game.currentPosition.coordinates);

    let coordinates = [0,0]

    if(startPosition) {coordinates = startPosition.split(",")
    coordinates[0] = parseInt(coordinates[0])
    coordinates[1] = parseInt(coordinates[1])
    console.log(coordinates)}
    

    const MyPosition = styled.div`
    border: 2px solid;
    height: 75px;
    width: 75px;
    position: absolute;
    bottom: ${100 + coordinates[1]*75}px;
    left: ${150 + coordinates[0]*75}px;
    `


    return(
        <MyPosition>
            <span role="img" aria-label="location" style={{position: 'relative', top:'26px', left: '26px'}}>❌</span>
        </MyPosition>
    )

}