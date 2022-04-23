import React from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
// import "nes.css/css/nes.min.css";

import game, { fetchMoreData } from "../reducers/game"

import maze from "./Assets/mazesvg.svg"


const Maze = styled.div`
    position: absolute;
    top: -10px;
    left: -10px;
    width: 160px;
    height: 160px;
    background-image: url(${maze});
    transform: scale(0.5);

    @media screen and (min-width: 668px) {
        top: 20px;
        left: 20px;
        transform: scale(0.8);
        }

    @media screen and (min-width: 1024px) {
        transform: scale(1);
        top: 30px;
        left: 30px;
    }

`

const MazePosition = styled.div`
    width: 20px;
    height: 20px;
    background-color: transparent;
    /* border-radius: 20px; */
    /* background-image: url(${props => props.background}); */

    box-shadow: ${props => props.background};

`


export const MazeGuide = () => {
    const position = useSelector((store) => store.game.position)
    console.log(position)

    const ChangeDot = () => {
        switch (position.coordinates) {
            case '0,0':
                return `30px 130px coral`
                break
            case '1,0':
                return `100px 130px coral`
                break
            case '1,1':
                return `110px 90px coral`
                break
            case '0,1':
                return `40px 80px coral`
                break
            case '0,2':
                return `40px 50px coral`
                break
            case '0,3':
                return `40px 10px coral`
                break    
            case '1,3':
                return `130px 20px coral`
                break   
            default: 
                return `20px 20px coral` 
        }
    }

    return (

        <Maze><MazePosition background={ChangeDot()}></MazePosition></Maze>


    )


        }