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
  justify-content: center;
  align-items: space-between;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  font-size: 18px;
  width: 100%;
  text-align: center;
  
`;

export const Button = styled.button`
  font-size: 15px;
  border: none;
  cursor: pointer;
`;

export const Description = styled.p`
  font-size: 15px;
  padding: 10px;
  height: 45%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  flex-direction: column;
`;

export const GameButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;