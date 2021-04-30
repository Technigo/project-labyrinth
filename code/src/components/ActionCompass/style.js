import styled from 'styled-components/macro';

import unselected from 'assets/mapbox-default.png';
import selected from 'assets/mapbox-on.png';

export default styled.div`
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

export const RadioButton = styled.input`
  display: none;
  :checked + label {
    background: url(${selected}) no-repeat;
    background-size: 100%;
  }
  :disabled + label {
    filter: grayscale(100%);
    color: #999;
  }
  :hover:not(:disabled) + label,
  :focus + label {
    cursor: pointer;
    box-shadow: inset 5px 5px 5px rgba(22, 22, 22, 0.8);
  }
`;
export const RadioLabel = styled.label`
  background: url(${unselected}) no-repeat;
  border-radius: 5px;
  line-height: 50px;
  display: inline-block;
  background-size: 100%;
  height: 100%;
  width: 100%;
`;
