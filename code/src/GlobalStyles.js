import styled from 'styled-components';
import Background from './images/bgforest.jpg'

export const OuterWrapper = styled.main`
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  background-color: #a1d19b;
  height: 100vh;
  background-image: url(${Background});
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
`

export const InnerWrapper = styled.section`

  @media (min-width: 668px) {
    width: 60%;
  }
  @media (min-width: 1025px){ 
    width: 50%;
    padding-bottom: 15vh;
  }
  @media (min-width: 1600px) {
    width: 45%;
  }
`

export const CardContainer = styled.div`
    margin-top: 40px;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0px 0px 7px 0px #888888;
    width: 50%;
    height: 60vh;
    font-size: 17px;
    overflow: auto;
    background-color: rgb(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`
export const StyledButton = styled.button`
  font-family: 'sriracha';
  font-weight: 600;
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #072201;
  padding: 20px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  cursor: pointer;
  &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
  }
`