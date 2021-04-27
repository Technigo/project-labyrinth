import styled, { css } from 'styled-components/macro'

export const baseTypography = css`
  font-family: 'Press Start 2P', cursive;
  color: white;
  text-shadow: -2px 0 black, 0 2px black, 2px 0 black, 0 -2px black;
  line-height: 32px;
`;

export const Title = styled.h1`
  ${baseTypography}
  
`;
export const Text = styled.p`
  ${baseTypography}  
`;
