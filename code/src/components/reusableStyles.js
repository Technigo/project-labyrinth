import styled from 'styled-components/macro';

export const InnerWrapper = styled.main`
  width: 100vw;
  
  @media (min-width: 600px) {
    width: 80%;
    max-width: 45rem;
  }
`

export const LocationWrapper = styled.section`
  padding: 1.5rem;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 100vh;
  // height: 100vh;
  text-align: center;
  

  @media (min-width: 659px) {
    border: 2px solid white;
    max-height: 80vh;
    padding: 3rem;
    min-height: 50rem;
    text-align: left;
  }
`
export const Button = styled.button`
  padding: .8rem;
  border: none;
  border-radius:.5rem;
  margin: 1rem auto 0;
  display: flex;
  background-color: tan;
  box-shadow: 0.3rem 0.3rem 1rem white;
  font-family: 'Calligraffitti', cursive;
  letter-spacing: 5px;
  font-size: 18px;
  width: 6rem;
  justify-content: center;
  
  @media (min-width: 659px) {
    margin: 1rem 0 0;
    &:hover{background-color: orange};
  }
`