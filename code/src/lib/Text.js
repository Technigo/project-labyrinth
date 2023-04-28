import styled from 'styled-components';

export const GreetingText = styled.h1`
  color: white;
  font-size: 60px;
  letter-spacing: 1px;
  padding: 0 20px;
`

export const MainDescription = styled.p`
  font-family: 'Teko', sans-serif;
  color: #FFFAF0;
  font-weight: 800;
  font-size: 20px;
  line-height:  24px;
  letter-spacing: 1px;
  margin-top: 0;

  @media(min-width: 1025px) {
   font-size: 22px;
   line-height:  26px;
  }
`

export const Description = styled.p`
  font-family: 'Teko', sans-serif;
  padding: 15px;
  width: 80%;
  border-radius: 6px;
  color: #FFFAF0;
  background: rgb(151 71 255 / 70%);
  font-weight: 800;
  font-size: 16px;
  line-height:  18px;
  letter-spacing: 1px;
  max-width: 200px;
  margin: 0;

  @media(min-width: 768px) {
   font-size: 22px;
   line-height:  26px;
  }
`

export const RestartText = styled.p`
  font-family: 'Teko', sans-serif;
  color: black;
  font-weight: 800;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 2px;
  position: absolute;
  top: 50%;
  left: 53%;
  transform: translate(-50%, -50%);
  margin: 0;
`