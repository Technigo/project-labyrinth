import React from 'react'
import styled from 'styled-components'

export const HistoryBox = ({ inputCoordinates }) => {
    let coordinates = [0,0]

    if(inputCoordinates) {coordinates = inputCoordinates.split(",")
        coordinates[0] = parseInt(coordinates[0])
        coordinates[1] = parseInt(coordinates[1])
    }

    const MyPosition = styled.div`
        border: 2px solid;
        background-color: grey;
        height: 75px;
        width: 75px;
        position: absolute;
        bottom: ${100 + coordinates[1]*75}px;
        left: ${150 + coordinates[0]*75}px;
    `

    return(
        <MyPosition>
            <span role="img" aria-label="position" style={{position: 'relative', top:'26px', left: '26px'}}>💪</span>
        </MyPosition>
    )

}