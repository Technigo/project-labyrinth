import styled from 'styled-components/macro';

// ----------------------------------------------------------------

export const Wrapper = styled.div`
  margin: 20px auto;
`;

export const InnerFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const OuterFlexWrapper = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Buttons ------------------------------------------

export const MainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 4px;
  cursor: pointer;
  border-radius: 4px;
`;
