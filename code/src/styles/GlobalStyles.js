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
    background: linear-gradient(rgba(82, 81, 81, 0.5), rgba(0, 0, 0, 0.5));
    border: 3px solid white;
    padding: 1.5em;
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 50vw;
    height: 80vh;
    line-height: 1.8rem;
`
export const StyledHeading = styled.h1`
  color: #3fceea;
  font-size: 1.8rem;
  line-height: 2em;
`;

export const StyledSubHeading = styled.h1`
  color: #3fceea;
  line-height: 2em;
  font-size: 1em;
  /* word-break: break-all; */
`;

export const Button = styled.button`
  font-size: .8em;
  background: transparent;
  border: none;
  padding: .8em;
  border-radius: 3px;
  cursor: pointer;
  color: white;
  border: 3px solid #3fceea;
  width: fit-content;
  font-family: "Press Start 2P", cursive;

  @media (min-width: 1024px) {
    :hover {
      background: #3fceea;
    }
  }
`