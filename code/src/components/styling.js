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

export const HeaderText = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  width: 80%;

  @media (min-width: 667px) {
    width: 400px;
   font-size: 28px;
  }
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
box-shadow: 2px 2px 2px grey;

&:hover {
    background: #0B8565;
}

@media (min-width: 667px){
    font-size: 16px;
  }
`;

export const Gif = styled.img`
  width: 100%;

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
margin: 12px;
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
  border: 1px solid grey;
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
  text-align: center; 

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

`;

