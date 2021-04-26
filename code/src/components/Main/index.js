import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import { action } from 'store/game'

import borderImage from 'assets/select-border-image.png';
import backgroundImage from 'assets/select-background-image.png';

const Main = styled.main``;

const Section = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: stretch;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
`;
const Text = styled.p`
`;

const Input = styled.input`
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  font-size: 0.9em;
  line-height: 32px;
  /* border */
  border-style: solid;
  border-width: 7px 7px 7px 7px;
  border-image: url(${borderImage}) 10% repeat repeat;
  /* background */
  background: url(${backgroundImage}) repeat repeat;
  background-clip: padding-box;
  background-origin: padding-box;
  background-position: center;
  padding-left: 10px;  
  
  &:focus {
    outline: none;
    border-image-slice: 15%;
  }
`;

export default () => {
  const dispatch = useDispatch();
  const username = useSelector((store) => store.game.name)
  React.useEffect(() => {
    dispatch(action())
  }, [dispatch])
  return (
    <Main>
      <Section>
        <Title>Welcome!</Title>
        <Text>Are you ready for this....???</Text>
        <Input type="text" placeholder={username} />
      </Section>
    </Main>
  );
};
