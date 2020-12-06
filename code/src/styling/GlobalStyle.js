import styled, { keyframes } from 'styled-components';

import Granim from 'react-granim'

export const Text = styled.p`
  color: #8A2BE2;
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px; 
  font-family: 'Major Mono Display', monospace;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StartContainer = styled.div`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #8A2BE2;
  font-size: 28px;
  width: 100%;
`;
