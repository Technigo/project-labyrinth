/* eslint-disable linebreak-style */
import React from 'react';
import { useState } from 'react';
import { fetchTheGame, game } from 'reducers/store';
import { useDispatch, useSelector } from 'react-redux';
import { OuterWrapper, TextWrapper, BigText } from 'GlobalStyles';
import styled from 'styled-components/macro'
import Footer from 'components/Footer'
import { LogIn } from './LogIn'
import Labyrinth from './Labyrinth';

const StartPage = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch();
    const { coordinates } = useSelector((store) => store.game.currentDirection)


    const test = () => {
        console.log(userName)
        dispatch(game.actions.setUserName(userName))
        dispatch(fetchTheGame())

    }

    return (
        <div>
            <OuterWrapper>
                <InnerWrapper>
                    <TextWrapper>
                        <BigText>To enter the labyrinth, please enter your name.</BigText>
                        <Input 
                        type="text" 
                        className="userName" 
                        placeholder="Please write your name"
                        required
                        onChange={(event) => setUserName(event.target.value)}
                        value={userName} />
                    </TextWrapper>
                    <Button 
                    type="submit" 
                    onClick={test}> Let’s go </Button>
                </InnerWrapper>
                <div>
              {coordinates > "0,0" &&
                <LogIn /> }
          </div>
            </OuterWrapper>
            <Footer />
       </div>
    )
}

export const InnerWrapper = styled.div`
    //outline: 1px solid red;
    display: flex;
    align-items: center;
    flex-direction: column; 
`

export const Input = styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 2px solid var(--color-white);
    font-family: 'Circular Std Book', sans-serif;
    font-size: 18px;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
`

export const Button = styled.button`
    background-color: transparent;
    border: 2px solid var(--color-white);
    font-family: var(--font-secondary);
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 5px 15px;
    color: var(--color-white);
`
export default StartPage;