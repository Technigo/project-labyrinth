import styled from 'styled-components'

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
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 500px;
min-height: 40vh;
gap: 3px;
padding: 50px;
padding-top: 10px;
background: transparent;
margin: auto;
box-shadow: 2px 2px 2px 2px grey;

@media ${Devices.mobile} {
  min-height: 30vh;
}
`

export const SubmitBtn = styled.button`
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
  gap: 5px;

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