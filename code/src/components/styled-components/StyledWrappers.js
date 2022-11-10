import styled from 'styled-components/macro'

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: grey;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
  height: auto;
  padding: 20px;
  text-align: center;
  background-color: pink;
  margin-bottom: 20px;
`;

export const TheEndWrapper = styled.div`
border: 2px solid red;
`