import styled from 'styled-components/macro';

export const InnerWrapper = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
background-color: rgba(247, 204, 172, 0.7);
padding: 10px;
border-radius: 20px;
border: 2px solid #3A3845;
@media (min-width: 668px) and (max-width: 1024px) {
  width: 60%;
}
@media (min-width: 1025px) {
  width: 70%;
}

`