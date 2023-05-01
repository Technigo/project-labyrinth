import styled from 'styled-components';

export const LoadingContainer = styled.div`
  background-color: rgba(145, 132, 115, 0.7);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  position: relative;
  min-height: 100vh;
  max-width: 100%;
  align-items: center;
  text-align: center;
`;

// export const LoadingWrapper = styled.div`
//   background-color: rgba(145, 132, 115, 0.7);
//   max-width: 80%;
//   margin: 2rem auto;
//   padding: 1rem;
//   display: flex;
//   justify-content: center;

//   @media (min-width: 1440px) {
//     max-width: 50rem;
//   }
// `;