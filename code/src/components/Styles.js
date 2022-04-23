
import styled from 'styled-components/macro'

const devices = {
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 1025px)",
  };

export const Container = styled.div`
    display: flex;
	  align-items: center;
	  flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
`
 export const ChildContainer = styled.div`
    margin: 0 20px;
    font-size: 0.7rem;

    @media ${devices.tablet} {
        width: 40%;
    }
    @media ${devices.desktop} {
        width: 40%;
    }
 `
 export const MazeCardText = styled.div`
    margin-bottom: 3rem;
 `

 export const Pokemons = styled.div`
    margin: 1rem 0 1.5rem 0;
 `
