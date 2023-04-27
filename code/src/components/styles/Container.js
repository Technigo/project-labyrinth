import styled from 'styled-components/macro';

export const OuterWrapper = styled.div`
  background-image: url("https://images.unsplash.com/photo-1548783917-a211bcc263cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1486&q=80");
  min-height: 100vh; //vh = view-height
  background-size: cover;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const InnerWrapper = styled.div`
// all these can be changed later on when we work on the styling
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 2rem;
  
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 5rem;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  border-radius: 5px;
  min-height: 60vh;
  width: calc(50% - 5rem);
  min-width: 350px;
  background-color: #161616;
  padding: 20px;

img {
    max-width: 150px;
    margin-bottom: 3rem;
  }
  h2 {
    margin-bottom: 2rem;
    color: white;
  }

  & .stat-container {
    width: 100%;
    margin: 0 auto;
    max-width: 20rem;
    margin-bottom: 1rem;
    p {
      margin-bottom: 0.5rem;
      text-align: left;
    }
  }

  button {
    background-color: #b3b813;
    border: none;
    border-radius:25px;
    padding: 1.2rem;
    margin-top: 1rem;
  }

  button:hover {
    background-color: transparent;
    border: #b3b813 1px solid;
    color: var(--primaryWhite)
  }
`;

export const DirectionsContainer = styled(PlayerContainer)`
  justify-content: space-between;
  min-height: 5rem;
  p {
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;

export const P = styled.p`
font-size: 20px;
color: red;
`;

export const TextBox = styled.div`
font-size: 20px;
background-color: var(--primaryBlack);
padding:20px;
`;