import React from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { ReactComponent as FinalPosition } from '../assets/FinalPosition.svg'
import { ReactComponent as StartPosition } from '../assets/StartPosition.svg'
import { ReactComponent as Position1 } from '../assets/Position1.svg'
import { ReactComponent as Position2 } from '../assets/Position2.svg'
import { ReactComponent as Position3 } from '../assets/Position3.svg'
import { ReactComponent as Position4 } from '../assets/Position4.svg'
import { ReactComponent as Position5 } from '../assets/Position5.svg'

const positions = {
  '0,0': StartPosition,
  '1,0': Position1,
  '1,1': Position2,
  '0,1': Position3,
  '0,2': Position4,
  '0,3': Position5,
  '1,3': FinalPosition
};

const Route = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates);
  const Position = positions[coordinates];
  return Position ? <Position /> : null;
};
export const Map = () => {
  return <Container><Route /></Container>
}

const Container = styled.div`
position:absolute;
bottom:1em;
right:1em;
`
