import styled from 'styled-components/macro'
import { baseTypography } from 'components/Typography/style'

import buttonMain from "assets/button.png"
import buttonDown from "assets/button-down.png"
import buttonHover from "assets/button-hover.png"

export default styled.button`
  ${baseTypography}
  max-width: 100%;
  min-width: 140px;
  height: 50px;
  padding: 0 5%;
  border: none;
  outline: none;
  
  /* Background */
  background: url(${buttonMain}) no-repeat;
  background-color: transparent;
  background-size: 100% 100%;
  
  /* Hover and Click */
  &:hover {
    background-image: url(${buttonHover});
    cursor: pointer;
  }
  &:active {
    background-image: url(${buttonDown})
  }
`;