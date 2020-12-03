import React from 'react';

import rainbow from '../assets/rainbow.png';
import { HeadingArea, HeaderDiv, Text, Image } from 'styled-components/HeaderContainer';

export const HeaderContainer = () => {
    return (
        <HeadingArea>
            <HeaderDiv>
                <Text>Rainbow Labyrinth</Text>
                <Image src={rainbow}></Image>
            </HeaderDiv>
        </HeadingArea>
    );
};