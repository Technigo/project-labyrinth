import styled from 'styled-components/macro'

export const Main = styled.main`
  display: grid;
  min-height: 100vh;
  grid-template-rows: min-content;
  justify-content: center;
  padding: 0.625em;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.backgroundImage })

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    align-content: center;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 3.75em;
    gap: 1em;
    align-items: center;
  }
  `

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media(min-width:768px) {
    grid-column: 1;
  }

  @media(min-width: 1024px) {
    flex-direction: column;
    grid-column: 3;
  }
  `
  export const CardContainer = styled.section`
  box-sizing: border-box;
  box-shadow: 0 0.125em 0.063em -0.063em rgba(0, 0, 0, 0.2), 
              0 0.063em 0.063em 0 rgba(0, 0, 0, 0.14), 
              0 0.063em 0.188em 0 rgba(0,0,0,.12);
  width: 90%;
  height: auto;
  margin-bottom: 0.625em;
  justify-self: center;

  background: linear-gradient(to right, #DECBA4, #f0e7d1);
  border-radius: 0.313em;
  outline: 0.063em solid grey;
  outline-offset: -0.438em;
  padding: 0.625em;
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
  min-height: 22.5em;
  max-height: 25em;
  margin: 0.125em;
  border-radius: 0.313em;
  outline: 0.063em solid grey;
  outline-offset: -0.438em;

  @media (min-width: 768px) {
    margin: 1.56em 0.313em 0 0.313em;

  }   @media (min-width: 1024px) {
    margin: 0 0 0.625em 0;
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

export const ImageAndDescriptionWrapper = styled.div`
  display: flex;

  @media(min-width: 1024px) {
    margin: 4.5em 0 0 0;
  }
`

export const DescriptionWrapper = styled.div`
  background: #fff;
  text-align: center;
  border-radius: 0.3em;
  margin: 0 1.7em 1.5em 0;
`