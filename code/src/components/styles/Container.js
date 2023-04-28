import styled from 'styled-components/macro';

export const OuterWrapper = styled.div`
  min-height: 100vh; //vh = view-height
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  margin: 0 auto;
  padding: .1rem;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 5rem;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  border-radius: 5px;
  width: calc(50% - 5rem);
  min-width: 350px;
  background-color: var(--primaryBlack);
  padding: 20px;

img {
    max-width: 150px;
    margin-bottom: 3rem;
  }
  h2 {
    margin-bottom: 2rem;
    color: white;
  }

  button {
    background-color: var(--pink);
    border: var(--pink) 1px solid;
    border-radius:25px;
    padding: 1.2rem;
    margin-top: 1rem;
  }

  button:hover {
    background-color: transparent;
    border: var(--pink) 1px solid;
    color: var(--primaryWhite)
  }

  @media (max-width:668px) {
  width: calc(50% - 5rem);
  max-height: 60vh;
  min-width: 200px;
  }
`;

export const ParentDirectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const DirectionsContainer = styled(PlayerContainer)`
  justify-content: space-between;
  max-width: 5rem;
  min-height: 5rem;
    p {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

export const P = styled.p`
font-size: 20px;
text-align: center;
color: var (--primaryWhite);
`;

export const TextBox = styled.div`
display: flex;
flex-direction: row;
font-size: 20px;
background-color: var(--primaryBlack);
text-align: center;
padding:40px;
margin: 10px 20px 0 20px;
border-radius: 40px 15px 40px 15px;
border: var(--pink) solid 2px;
`;

export const ButtonRestart = styled.button`
  background-color: #b3b813;
  border: #b3b813 1px solid;
  border-radius:25px;
  padding: 1.2rem;

  &:hover {
    background-color: var(--secondaryGreen);
    border: var(--secondaryGreen) 1px solid;
    color: var(--primaryBlack);
  }

`;

export const Loading = styled.div`
background-color:red;
`