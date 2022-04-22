import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components/macro"
import { game } from "reducers/game"

import startCave from "../assets/startcave.svg"
import endCave from "../assets/endcave.svg"

const Section = styled.section`
position: relative;
width:150px;
height: 150px;
justify-self: flex-end;
margin: auto;
`

const Map = styled.div`
bottom: 1rem;
left: 50%;
border: solid 1px white;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
border-radius: 10px;
`

const Pin1 = styled.span`
position: absolute;
bottom: 0;
left: 0;
font-size: 25px;
`

const Pin2 = styled.span`
position: absolute;
bottom: 0;
right: 0;
font-size: 25px;
`

const Pin3 = styled.span`
position: absolute;
bottom: 33%;
right: 0;
font-size: 25px;
`

const Pin4 = styled.span`
position: absolute;
bottom: 33%;
left: 0;
font-size: 25px;
`

const Pin5 = styled.span`
position: absolute;
top: 33%;
left: 0;
font-size: 25px;
`

const Pin6 = styled.span`
position: absolute;
top: 0;
left: 0;
font-size: 25px;
`

const Pin7 = styled.span`
position: absolute;
top: 0;
right: 0;
font-size: 25px;
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
const Player = styled.p`
color:red;
font-weight:900;
text-align: center;
margin:50px auto 10px auto;  
padding:5px;
width:fit-content;
background-color: rgba(0, 0, 0, 0.5);
border-radius: 10px;
`

 export const MiniMap = (coordinates) => {

    const username = useSelector(store => store.game.username)

     return(
         <>
         <Player>Player: {username} 📍</Player>
         <Section>  
         <Map>
            <StartCave src={startCave}/>
            {coordinates.coordinates === '0,0' && <Pin1>📍</Pin1>}
            {coordinates.coordinates === '1,0' && <Pin2>📍</Pin2>}
            {coordinates.coordinates === '1,1' && <Pin3>📍</Pin3>}
            {coordinates.coordinates === '0,1' && <Pin4>📍</Pin4>}
            {coordinates.coordinates === '0,2' && <Pin5>📍</Pin5>}
            {coordinates.coordinates === '0,3' && <Pin6>📍</Pin6>}
            {coordinates.coordinates === '1,3' && <Pin7>📍</Pin7>}
            <EndCave src={endCave}/>
         </Map>
         </Section>
         </>
     )
}