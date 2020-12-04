import styled from 'styled-components';

export const MainText = styled.p`
  font-size: 14px;
  font-family: 'Castoro', serif;
  margin: 2px;
  width: 80%;

  @media (min-width: 667px){
      font-size: 16px;
    }
`;

export const FooterText = styled.p`
  font-size: 10px;
  font-family: 'Montserrat', sans-serif;
  margin: 5px;
`;

export const HeaderText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  width: 80%;
  text-align: center;
  font-weight: bold;

  @media (min-width: 667px) {
    width: 50%;
    font-size: 28px;
    top: 50px;
  }
`;

export const StartHeader = styled.h1`
  color: white;
  text-shadow: 5px 5px black;
  font-size: 32px;
  letter-spacing: 2px;
`;

export const Button = styled.button`
  border: none;
  margin: 10px;
  padding: 6px 20px;
  border-radius: 15px;
  justify-self: flex-end;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  transition: all 150ms;
  cursor: pointer;
  background: #3FBEA1;
  color: #fff;
  box-shadow: 3px 3px 2px #B8B4B4;

  &:hover {
      background: #69DFC7;
  }

  @media (min-width: 667px){
      font-size: 16px;
    }
`;

export const Gif = styled.img`
  width: 100%;
  border-radius: 15px;

  @media (min-width: 667px) {
    width: 400px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin: 0 0 12px 0;
  padding: 12px;
  background: #E6E4E4;

  @media (min-width: 667px){
      width: 400px;
      margin: 40px;
      padding: 15px;
      border-radius: 25px;
    }
`;

export const TextInput = styled.input`
  padding: 12px;
  border: none;
  border-radius: 5px;
  background: #E6E4E4;
  font-size: 13px;
  outline: none;

  @media (min-width: 667px){
    font-size: 16px;
  }
`;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #FAF9F9;
  background-color: #FAF9F9;
  width: 100%;
  margin: 20px;
  padding: 20px;
  align-items: center;
  justify-content: center; 

  @media (min-width: 667px){
    width: 50%;
    border-radius: 25px;
  }
`;

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  text-align: center; 
  
  @media (min-width: 667px){
  }
`;

export const History = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EndImage = styled.img`
  width: 100%;
  border-radius: 15px;
  margin-bottom: 5px;

  @media (min-width: 667px) {
    width: 50%;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

