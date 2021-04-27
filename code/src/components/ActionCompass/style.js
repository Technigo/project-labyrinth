import styled from 'styled-components/macro';
import { baseTypography } from 'components/Typography/style';

import buttonMain from 'assets/button.png';
import buttonDown from 'assets/button-down.png';
import buttonHover from 'assets/button-hover.png';

export default styled.div`
  ${baseTypography}
  
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 5px;
  max-width: 100%;
  min-width: 140px;
  
  & > * {
    width: 50px;
    height: 50px;
    margin: 0 auto;
  }
  & > :nth-child(1) {
    grid-area: 1 / 1 / 2 / 3;
  }
  & > :nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }
  & > :nth-child(3) {
    grid-area: 2 / 2 / 3 / 3; 
  }
  & > :nth-child(4) {
    grid-area: 3 / 1 / 4 / 3; 
  }
`;

export const Toggle = styled.input`
  visibility: hidden;
  position: relative;
  z-index: -1;
  
  &:checked + input {
    background-image: url(${buttonDown});
  }
`;
export const ToggleLabel = styled.label`
  width: 100%;
  display: block;
  background: url(${buttonMain}) no-repeat;
  background-color: transparent;
  background-size: 100% 100%;
  
  &:hover {
    background-image: url(${buttonHover});
    cursor: pointer;
  }
  &:active {
    background-image: url(${buttonDown});
  }
`;

