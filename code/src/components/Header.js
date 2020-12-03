import React from "react";
import styled from 'styled-components';

import { Centered } from '../lib/Styling';

// const TitleBox = styled(Centered)`
//   border: 2px solid tomato;
// `

const Title = styled.h1`
  font-family: 'Texturina', serif;
  font-size: 8vw;
  margin: 7vw;
  padding: 1vw 4vw;
`

export const Header = () => {
  return (
    <Centered>
      <Title>
        LABYRINTH
      </Title>
    </Centered>
  )
};
