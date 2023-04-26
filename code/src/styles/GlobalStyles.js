import styled from 'styled-components'
import img from '../assets/maze.jpg'

const sizes = {
  mobile: '364px',
  tablet: '668px',
  desktop: '2560px'
};

export const Devices = {
  mobile: `min-width: ${sizes.mobile})`,
  tablet: `min-width: ${sizes.tablet})`,
  desktop: `min-width: ${sizes.desktop})`
};

export const StartContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
/* display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 500px;
min-height: 40vh;
gap: 3px;
padding: 50px;
padding-top: 10px;
/* background: transparent; */
/* margin: auto;
box-shadow: 2px 2px 2px 2px grey; */ 

@media ${Devices.mobile} {
  min-height: 30vh;
}
`;

export const Header = styled.header`
  width: 90%;
  background-color: rgba(255, 255, 255, 0.063);
  backdrop-filter: blur(30px);
  --webkit-backdrop-filter: blur(30px);
`

export const HeadedingOneContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const SubmitBtn = styled.button`
  transition: all 0.3s ease;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  color: rgb(17, 101, 48);
  background-color: rgb(255, 204, 29);
  font-weight: bolder;
  border: none;
  font-size: 1.2rem;
  margin-top: 50px;
  margin-bottom: 30px;
  :hover {
    background-color: rgb(68,60,37);
    color: rgb(255, 204, 29);
    transform: scale(1.1, 1.1);
  }
/* transition: all 0.3s ease;
  background-color: #A7BDAC;
  width: 4em;
  margin: 10px;
  font-size: 1.3rem;
  border-color: lightgrey;
  border-radius: 1px;
  box-shadow: 1px 1px 1px 1px grey;
  color: black;
  padding: 6%;
  text-align: center;
  cursor: pointer;
  gap: 5px; */

  @media ${Devices.mobile} {
  width: 10px;
  height: 20px;
  font-size: 12px;
  }
`

export const TextH1 = styled.h1`
font-family: 'Special Elite', cursive;
font-size: 1.7em;
color: red;
text-align: center;


@media ${Devices.mobile} {
  font-size: 14px;
}
`
export const TextP = styled.p`
font-family: 'Special Elite', cursive;
font-size: 1.5em;
color: black;

@media ${Devices.mobile} {
  font-size: 12px;
}
`