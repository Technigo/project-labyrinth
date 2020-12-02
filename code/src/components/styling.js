import styled from 'styled-components';

export const MainText = styled.p`
font-size: 14px;
font-family: 'Castoro', serif;
margin: 2px;

@media (min-width: 667px){
    font-size: 16px;
  }
`;

export const HeaderText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  margin: 50px;
  width: 60%;
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

&:hover {
    background: #0B8565;
}

@media (min-width: 667px){
    font-size: 16px;
  }
`;

export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
width: 300px;
height: 100px;
margin: 12px;
padding: 12px;
background: #E6E4E4;
border-radius: 25px;

@media (min-width: 667px){
    width: 400px;
    margin: 40px;
    padding: 40px;
  }
`;

export const TextInput = styled.input`
  padding: 12px;
  border: none;
  border-radius: 15px;
  background: #E6E4E4;
  font-size: 13px;
  align-self: center;
  justify-self: center;
  margin-left: 25px;

  @media (min-width: 667px){
    font-size: 16px;
  }
  `;

export const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #FAF9F9;
  background-color: #FAF9F9;
  width: 80%;
  margin: 20px;
  padding: 15px;
  border-radius: 25px;
  align-items: center;
  justify-content: center; 
  text-align: center; 

  @media (min-width: 667px){
    width: 50%;
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

`;

