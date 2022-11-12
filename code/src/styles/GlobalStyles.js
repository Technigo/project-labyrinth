import styled from 'styled-components/macro'

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100%;
`

export const ChildContainer = styled.div`
  box-sizing: border-box;
    background: linear-gradient(rgba(82, 81, 81, 0.9), rgba(0, 0, 0, 0.9));
    border: 3px solid white;
    padding: 1.5em;
    margin: .5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    text-align: center;
    width: 80vw;
    min-height: 65vh;

    @media (min-width: 667px) {
    max-height: 60vh;
    padding: 3em;
    }
`
export const StyledHeading = styled.h1`
  font-family: "Press Start 2P", cursive;
  color: #3fceea;
  font-size: 1.2em;
  line-height: 2em;

  @media (min-width: 667px) and (max-width: 1024px) {
  font-size: 2.5em;
  }

  @media (min-width: 1024px) {
  font-size: 1.6em;
  }
`

export const StyledSubHeading = styled.h1`
  font-family: "Press Start 2P", cursive;
  color: #3fceea;
  line-height: 2em;
  font-size: .8em;

  @media (min-width: 667px) {
  font-size: 1.9em;
  }
`

export const Button = styled.button`
  font-size: 1em;
  background: transparent;
  border: none;
  padding: .8em;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  border: 3px solid #3fceea;
  width: fit-content;
  margin-top: 1em;
  font-family: "Press Start 2P", cursive;

  @media (min-width: 1024px) {
    :hover {
      background: #3fceea;
    }
  }
`