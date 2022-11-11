/* eslint-disable linebreak-style */
import React from 'react';
import { useState } from 'react';
import { fetchTheGame, game } from 'reducers/store';
import { useDispatch } from 'react-redux';
import { OuterWrapper, InnerWrapper, TextWrapper, BigText, Button } from 'GlobalStyles';
import styled from 'styled-components/macro'
import Footer from 'components/Footer'

const StartPage = () => {
    const [userName, setUserName] = useState('')
    const dispatch = useDispatch();

    const onAction = () => {
        console.log(userName)
        dispatch(game.actions.setUserName(userName))
        dispatch(fetchTheGame())

    }

    return (
        
            <OuterWrapper>
                <InnerWrapper>
                    <TextWrapper>
                        <BigText>To enter the labyrinth, please enter your name.</BigText>
                        <Input 
                        type="text" 
                        className="userName" 
                        placeholder="Please write your name"
                        onChange={(event) => setUserName(event.target.value)}
                        value={userName} />
                    </TextWrapper>
                    <Button 
                    type="submit" 
                    onClick={onAction}> Let’s go </Button>
                    <Footer />
                </InnerWrapper>
            </OuterWrapper>
       
    )
}

export const Input = styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 2px solid var(--color-white);
    font-family: 'Circular Std Book', sans-serif;
    font-size: 18px;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    color: var(--color-white);
`

export default StartPage;