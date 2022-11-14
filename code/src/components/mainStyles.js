/* eslint-disable no-nested-ternary */
/* eslint-disable linebreak-style */
import styled from 'styled-components/macro';

//  background-color: #ffe8b7;

const sizes = {
  tablet: '668px',
  laptop: '1024px',
  desktop: '2560px'
};

export const Devices = {
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`
};

export const OuterWrapper = styled.div`
  background-color: #F4D288;
  padding: 5% 5%;
`

export const InnerWrapper = styled.div`
  background-color: #18211E;
  overflow-x: hidden;
  border: double gray;
  border-radius: 5px;
  width: 90%;
  max-width: 900px;
  min-height: 75vh;
  margin: 0 auto;
  padding: 5% 5%;

  @media (min-width: 1024px) {
    hight: 60%;
  }
`

export const InputButton = styled.button`
  background-color: #A7BDAC;
  min-width: 60px;
  border-color: lightgrey;
  border-radius: 1px;
  box-shadow: 1px 1px 1px grey;
  margin: 5% 5% 3% 0%;
  font-size: 1em;
  color: black;
  padding: 2%;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.7em;
  }
`

export const DirectionButton = styled.button`
  background-color: #A7BDAC;
  width: 4em;
  margin: 10px;
  font-size: 1.3rem;
  border-color: lightgrey;
  border-radius: 1px;
  box-shadow: 1px 1px 1px grey;
  color: black;
  padding: 6%;
  text-align: center;
  grid-column-start: ${(props) => (props.direction === 'North' && '2')};
  grid-column-start: ${(props) => (props.direction === 'South' && '5')};
  grid-column-start: ${(props) => (props.direction === 'East' && '3')};
  grid-column-start: ${(props) => (props.direction === 'West' && '4')};
`