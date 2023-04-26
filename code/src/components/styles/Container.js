import styled from 'styled-components/macro';

export const OuterWrapper = styled.div`
// the bc-color will change later when we style the game
  background-color: hotpink;
  min-height: 100vh; //vh = view-height
  background-size: cover;
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
  margin-bottom: 2rem;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 0.2rem solid #9b9b9b;
  border-radius: 5px;
  min-height: 60vh;
  width: calc(50% - 5rem);
  min-width: 350px;
  background-color: #ffffff33;
  padding: 20px;
// more changes to be edited later on after discussion with teammate :)

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
    background-color: #92cc40;
    padding: 1.2rem;
    margin-top: 1rem;
  }
`;

export const DirectionsContainer = styled(PlayerContainer)`
  justify-content: space-between;
  min-height: 25rem;
  p {
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;