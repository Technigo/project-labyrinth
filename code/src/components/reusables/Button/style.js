import styled from 'styled-components/macro';

import buttonMain from 'assets/button.png';
import buttonDown from 'assets/button-down.png';
import buttonHover from 'assets/button-hover.png';

export default styled.button`
  height: 50px;
  max-width: 100%;
  min-width: 200px;
  padding: 0 5%;
  border: none;
  outline: none;
  filter: none;
  background: url(${buttonMain}) no-repeat;
  background-color: transparent;
  background-size: 100% 100%;

  :hover,
  :focus {
    background-image: url(${buttonHover});
    cursor: pointer;
  }
  :active {
    background-image: url(${buttonDown});
  }
  :disabled {
    filter: grayscale(100%);
    color: #999;
  }
`;
