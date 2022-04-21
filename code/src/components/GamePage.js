import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import { fetchMoreData } from "../reducers/game"
import arrow from "./Assets/arrow.png"


const DirectionImage = styled.img`
    width: 30px;
    height: 30px;
    transform: ${props => 
        props.direction === "North"
            ? `rotate(-90deg)`
            : props.direction === "South"
            ? `rotate(90deg)`
            : props.direction === "West"
            ? `rotate(180deg)`
            : `rotate(0deg)`
    }
`

const DirectionButton = styled.button`
    appearance: none;   
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
`

const GamePage = () => {
    const position = useSelector((store) => store.game.position)
    console.log(position)
    const dispatch = useDispatch()


    return (
        <div>
            <h1>{position.description}</h1>
            <p>{position.coordinates}</p>
            {position.actions.map(item => (
                <div>
                    <DirectionButton
                    key={item.direction}
                    onClick={() => dispatch(fetchMoreData({direction: item.direction}))}
                    >
                        <DirectionImage
                        src={arrow}
                        alt="direction arrow"
                        direction={item.direction}
                        ></DirectionImage>
                        {item.direction}
                    </DirectionButton>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default GamePage