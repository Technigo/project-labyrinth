import styled from 'styled-components/macro'
// Images
import borderImage from 'assets/input-border-image.png';
import backgroundImage from 'assets/input-background-image.png';

export default styled.input`
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