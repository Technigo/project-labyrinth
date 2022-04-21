import React from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import "nes.css/css/nes.min.css";

import { fetchMoreData } from "../reducers/game"
import arrow from "./Assets/pixel-arrow.svg"
import blueBackground from './Assets/blue-background.png'
import brownBackground from './Assets/brown-background.png'


const MainDescription = styled.h1`
    font-size: 1.2rem;
    color: white;
    padding: 3rem 3rem 0;
`

const DirectionDescription = styled.p`
    font-size: 0.7rem;
    color: white;
`

const DirectionImage = styled.img`
    width: 25px;
    height: 25px;
    transform: ${props => 
        props.direction === "North"
            ? `rotate(0deg)`
            : props.direction === "South"
            ? `rotate(180deg)`
            : props.direction === "West"
            ? `rotate(-90deg)`
            : `rotate(90deg)`
    }
    
`

const BackgroundImage = styled.div`
    width: 100vw;
    min-height: 100vh;
    background: url("${blueBackground}") !important; 
    background-repeat: no-repeat;
    background-size: cover;

`

const DirectionButton = styled.button`
    appearance: none;   
    background: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    width: 100;
    color: white;
`

const ContentWrapper = styled.section`
    display: flex;
    flex-direction: column;
`

const DirectionDetails = styled.div`
    display: flex;
    flex-direction: column;
`

const ArrowContainer = styled.div`
    padding: ${props =>
        props.padding === "West"
        ? "0 2 0 0"
        : props.padding === "East"
        ? "0 0 0 2"
        : "0 2"
    };
    text-align: center;
    display: flex;
    flex-direction: ${props => 
        props.direction === "East"
        ? "row"
        : props.direction === "West"
        ? "row"
        : props.direction === "South"
        ? "column-reverse"
        : "column"
    };
    align-items: ${(props) =>
        props.alignment === "South"
            ? "flex-end"
            : props.alignment === "North"
            ? "flex-start"
            : "center"
    };
    justify-content: ${(props) =>
        props.justify === "East"
            ? "flex-end"
            : props.justify === "West"
            ? "flex-start"
            : "center"
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    p {
        color: white;
        margin-top: 1rem;
        padding: 0 3rem;
    }
`

const GamePage = () => {
    const position = useSelector((store) => store.game.position)
    console.log(position)
    const dispatch = useDispatch()


    return (
        <BackgroundImage>
            <ContentWrapper>
                <TextContainer>
                    <MainDescription>{position.description}</MainDescription>
                    <p>Choose your next move:</p>
                </TextContainer>
            {/* <p>{position.coordinates}</p> */}
                {position.actions.map(item => (
                    <DirectionDetails>
                        <ArrowContainer
                        direction={item.direction}
                        padding={item.direction}
                        justify={item.direction}
                        alignment={item.direction}
                        >
                            <DirectionButton
                            key={item.direction}
                            onClick={() => dispatch(fetchMoreData({direction: item.direction}))}
                            >
                                <DirectionImage
                                src={arrow}
                                alt="direction arrow"
                                direction={item.direction}
                                ></DirectionImage>
                                {/* {item.direction} */}
                            </DirectionButton>
                            <DirectionDescription>{item.description}</DirectionDescription>
                        </ArrowContainer>
                    </DirectionDetails>
                ))}
            </ContentWrapper>
        </BackgroundImage>
    )
}

export default GamePage