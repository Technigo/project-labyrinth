import styled from 'styled-components'

const sizes = {
  mobile: '364px',
  tablet: '668px',
  laptop: '1024px'
};

export const Devices = {
  mobile: `min-width: ${sizes.mobile})`,
  tablet: `min-width: ${sizes.tablet})`,
  laptop: `min-width: ${sizes.laptop})`
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
`
export const TextP = styled.p`
font-family: 'Special Elite', cursive;
font-size: 1.5em;
color: black;
`