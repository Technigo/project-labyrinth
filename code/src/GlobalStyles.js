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
 width: 75%;

  @media (min-width: 668px) {
    width: 75%;
  }
  @media (min-width: 1025px){ 
    width: 60%;
  }
  @media (min-width: 1600px) {
    width: 55%;
  }
`

export const CardContainer = styled.div` 
    margin-top: 40px;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0px 0px 7px 0px #888888;
    height: 80vh;
    font-size: 17px;
    overflow: auto;
    background-color: rgb(255, 255, 255, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-start;

    @media (min-width: 668px) {
    height: 61vh;
  }
    
`
export const StyledButton = styled.button`
  font-family: 'sriracha';
  font-weight: 600;
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #072201;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 50px;
  display: inline-block;
  border: none;
  cursor: pointer;
  &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
  }
`
