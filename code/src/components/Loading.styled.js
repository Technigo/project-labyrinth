import styled from 'styled-components';

export const Styled = {
  LoadingGif: styled.img`
    margin: 0px auto;
    height: 100%;
    width: 90%;
`,
  Container: styled.div`
    background-color:#c0c0c0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 35%;
    height: 100%;
    margin: 0px auto;
    margin-top: 7rem;
    margin-bottom: 10rem;
    text-align: center;
    padding: 20px;
    @media only screen and (max-width: 1000px) {
      width: 70%;
    }
`
}