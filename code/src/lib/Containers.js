import styled from 'styled-components/macro'

export const Main = styled.main`
  display: grid;
  grid-template-rows: min-content;
  justify-content: center;
  padding: 10px;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backgroundImage })

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 60px;
    gap: 15px;
    align-items: center;
  }
  `

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media(min-width:768px) {
    grid-column: span 2;
  }

  @media(min-width: 1024px) {
    flex-direction: column;
    grid-column: 3;
  }
  `
  export const CardContainer = styled.section`
  box-sizing: border-box;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 
              0px 1px 1px 0px rgba(0, 0, 0, 0.14), 
              0px 1px 3px 0px rgba(0,0,0,.12);
  width: 90%;
  height: auto;
  margin-bottom: 10px;

  background: linear-gradient(to right, #DECBA4, #f0e7d1);
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;
  padding: 10px;
  text-align: center;

  @media (min-width: 768px) {
    width: 80%;
  } 

  @media (min-width: 1024px) {
    grid-column: 2;
    width: 100%;
  }

  ${({ carddeck }) => carddeck && `
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
  }
  @media (min-width: 1024px) {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  `}

  ${({movedeck}) => movedeck && `
  min-height: 360px;
  max-height: 400px;
  margin: 2px;
  border-radius: 5px;
  outline: 1px solid grey;
  outline-offset: -7px;

  @media (min-width: 768px) {
    margin: 25px 5px 0 5px;

  }   @media (min-width: 1024px) {
    margin: 0 0 10px 0;
  }
  `}
  `
  export const GameContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backgroundImage });
`