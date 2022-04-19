import React from "react"
import styled from "styled-components/macro"

import startCave from "../assets/startcave.svg"
import endCave from "../assets/endcave.svg"

const Map = styled.div`
position: absolute;
bottom: 0;
left: 50%;
border: solid 1px white;
`

const Pin1 = styled.span`
position: absolute;
bottom: 0;
left: 0;
width: 50px;
`

const Pin2 = styled.span`
position: absolute;
bottom: 0;
right: 0;
width: 50px;
`

const Pin3 = styled.span`
position: absolute;
bottom: 33%;
right: 0;
width: 50px;
`

const Pin4 = styled.span`
position: absolute;
bottom: 33%;
left: 0;
width: 50px;
`

const Pin5 = styled.span`
position: absolute;
top: 33%;
left: 0;
width: 50px;
`

const Pin6 = styled.span`
position: absolute;
top: 0;
left: 0;
width: 50px;
`

const Pin7 = styled.span`
position: absolute;
top: 0;
right: 0;
width: 50px;
`
const StartCave = styled.img`
position: absolute;
bottom: 0;
left: 0;
width: 50px;
`

const EndCave = styled.img`
position: absolute;
top: 0;
right: 0;
width: 50px;
`

 export const MiniMap = (coordinates) => {
     console.log('coordinates:', coordinates)
     return(
         <Map>
            <StartCave src={startCave}/>
            {coordinates === '0,0' && <Pin1>📍</Pin1>}
            {coordinates === '1,0' && <Pin2>📍</Pin2>}
            {coordinates === '1,1' && <Pin3>📍</Pin3>}
            {coordinates === '0,1' && <Pin4>📍</Pin4>}
            {coordinates === '0,2' && <Pin5>📍</Pin5>}
            {coordinates === '0,3' && <Pin6>📍</Pin6>}
            {coordinates === '1,3' && <Pin7>📍</Pin7>}
            <EndCave src={endCave}/>
         </Map>
     )
}