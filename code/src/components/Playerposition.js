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
    position: absolute;
    bottom: ${500 + coordinates[1]*100}px;
    left: ${200 + coordinates[0]*100}px;
    `


    return(
        <MyPosition>
        ❌
        </MyPosition>
    )

}