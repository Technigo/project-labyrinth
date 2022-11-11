/* eslint-disable linebreak-style */
import React from 'react';
//import { NotFound } from './NotFound';
import styled from 'styled-components/macro'
import StartPage from './StartPage';
import { useSelector } from 'react-redux';
import { Loading } from './Loading';
import Labyrinth from './Labyrinth';
import start from '../Images/Start.png';
import zeroPointZero from '../Images/0.0.png';
import zeroPointOne from '../Images/0.1.png';
import zeroPointTwo from '../Images/0.2.png';
import zeroPointThree from '../Images/0.3.png';
import onePointZero from '../Images/1.0.png';
import onePointOne from '../Images/1.1.png';
import end from '../Images/End.png';

const Wrapper = () => {
    const { coordinates } = useSelector((store) => store.game.currentDirection)
    const isLoading = useSelector((store) => store.ui.isLoading)

    const setBackgroundImage = () => {
        let img = `url(${start})`
        switch (coordinates) {
          case '0,0':
            img = `url(${zeroPointZero})`
            break
          case '1,0':
            img = `url(${onePointZero})`
            break
          case '1,1':
            img = `url(${onePointOne})`
            break
          case '0,1':
            img = `url(${zeroPointOne})`
            break
          case '0,2':
            img = `url(${zeroPointTwo})`
            break
          case '0,3':
            img = `url(${zeroPointThree})`
            break
          case '1,3':
            img = `url(${end})`
            break
          default:
            img = `url(${start})`
        }
        return img
      }

    return (
        <BackgroundContainer style={{ background: setBackgroundImage(coordinates) }}>
            {isLoading ? (
            <Loading />
             ):
            <div>
                {coordinates ? <Labyrinth /> :   <StartPage /> }
            </div>
            }
        </BackgroundContainer>
    )
}

export const BackgroundContainer = styled.main`
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center;
    height: 100%;
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    color: white;
`

export default Wrapper;

