import styled from 'styled-components/macro'

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #16213E;
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
  background-color: #0F3460;
  margin-bottom: 20px;
  border-radius: 4px;
  @media (min-width: 790px) {
    max-width: 65%;   
  }
  @media (min-width: 990px) {
    max-width: 55%;
    margin-top: 100px;
  }
`;

export const TheEndWrapper = styled.div`
`

export const CongratuationWrap = styled.div`
line-height: 0.5rem;
font-family: 'Tajawal', sans-serif;
font-size: 1.2rem;
color: #1EA39E;
`
