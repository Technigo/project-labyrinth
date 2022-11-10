import styled from 'styled-components';

export const OuterWrapper = styled.div`
  /* background-color: #464646; */
  min-height: 100vh;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

export const InnerWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 16px;
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5rem;
`;

export const CharacterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 0.2rem solid #9b9b9b;
  border-radius: 5px;
  min-height: 60vh;
  width: calc(50% - 5rem);
  min-width: 350px;
  background-color: #ffffff33;

  h2 {
    text-align: center;
    font-size: 1rem;
  }

  img {
    max-width: 150px;
    margin-bottom: 20px;
  }

  & .stat-container {
    width: 100%;
    margin: 0 auto;
    max-width: 20rem;
    margin-bottom: 1rem;

    p {
      margin-bottom: 0.5rem;
    }
  }
`;
