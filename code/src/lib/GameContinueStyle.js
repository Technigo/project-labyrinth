import styled from 'styled-components';

export const Section = styled.div`
  display flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 18px;
  width: 100%;
`;

export const Button = styled.button`
  font-size: 15px;
  border: none;
  cursor: pointer;
`;

export const Description = styled.p`
  font-size: 15px;
  padding: 10px;
  width: 200px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between
  width: 45%;
  flex-direction: column;
  min-height: 25%
`;

export const GameButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;