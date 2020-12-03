import React from 'react';
import styled from 'styled-components';

import rainbow from '../assets/rainbow.png';

const HeadingArea = styled.header`
    text-align: center;
    font-family: 'Mystery Quest', cursive;
    font-size: 30px;
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const HeaderDiv = styled.div`
    width: 90%; 
    margin: auto;
    border: 3px solid white;
    padding: 10px 0;
    @media(min-width: 1024px) {
        width: 70%;
    }
`;

const Text = styled.h1`
    margin: 0;
`;

const Image = styled.img`
    width: 125px;
`;

export const HeaderContainer = () => {
    return (
        <HeadingArea>
            <HeaderDiv>
                <Text>LABYRINTH</Text>
                <Image src={rainbow}></Image>
            </HeaderDiv>
        </HeadingArea>
    );
};