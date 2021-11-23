import styled from 'styled-components';

import {
  url0_0,
  url0_1,
  url0_2,
  url0_3,
  url1_1,
  url1_3,
} from '../images/images';

export const Main = styled.main`
  display: flex;
  color: white;
  justify-content: center;
  position: relative;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: ${props =>
    props.coordinates === '1,3'
      ? url1_3
      : props.coordinates === '1,1'
      ? url1_1
      : props.coordinates === '1,0'
      ? url1_1
      : props.coordinates === '0,3'
      ? url0_3
      : props.coordinates === '0,2'
      ? url0_2
      : props.coordinates === '0,1'
      ? url0_1
      : props.coordinates === '0,0'
      ? url0_0
      : url0_0};
  background-size: cover;
`;
